import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agence } from 'src/app/interfaces/Agence';
import { Agent } from 'src/app/interfaces/Agent';
import { AgenceService } from 'src/app/services/agence.service';
import { AgentService } from 'src/app/services/agent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'icons-tables',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public agences: Agence[];
  constructor(private agenceService: AgenceService ) {}

  ngOnInit() {
    this.displayAllAgences();
  }
  public displayAllAgences():void{
    this.getAgences();
    setTimeout(()=>{
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        order:[[1,"asc"]]
    } );
    }, 500);
    
  }
  

  public getAgences(): void {
    this.agenceService.getAgence().subscribe(
      (response: Agence[]) => {
        this.agences = response;  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  OnSaveAgence(f:NgForm){
    console.log(f.value);
    this.agenceService.addAgence(f.value).subscribe(
      (response: Agence) => {
          console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

}
}
