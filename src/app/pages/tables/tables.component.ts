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
  public clients: Agent[];
  constructor(private agenttService: AgentService ) {}

  ngOnInit() {
    this.displayAllClients();
  }
  public displayAllClients():void{
    this.getClients();
    setTimeout(()=>{
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        order:[[1,"asc"]]
    } );
    }, 5);
    
  }
  

  public getClients(): void {
    this.agenttService.getAgent().subscribe(
      (response: Agent[]) => {
        this.clients = response;  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
