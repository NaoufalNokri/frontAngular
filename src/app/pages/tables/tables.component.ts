import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/interfaces/Agent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public agents: Agent[] = [];
  constructor(private agentService: AgentService ) {}

  ngOnInit() {
    this.displayAllAgents();
  }
  public displayAllAgents():void{
    this.getAgents();
    setTimeout(()=>{
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        order:[[1,"asc"]]
    } );
    }, 100);

  }


  public getAgents(): void {
    this.agentService.getAgents().subscribe(
      (response: Agent[]) => {
        this.agents = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
