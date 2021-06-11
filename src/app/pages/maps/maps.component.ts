import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public clients: Client[];
  constructor(private clientService: ClientService ) {}

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
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

