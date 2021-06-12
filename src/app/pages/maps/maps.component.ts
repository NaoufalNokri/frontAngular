import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agence } from 'src/app/interfaces/Agence';
import { Client } from 'src/app/interfaces/client';
import { AgenceService } from 'src/app/services/agence.service';
import { ClientService } from 'src/app/services/client.service';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  public clientAj: Client;
  public clients: Client[];
  public agences: Agence[];
  constructor(private clientService: ClientService,private agenceService: AgenceService ) {}

  ngOnInit() {
    this.displayAllClients();
  }
  public displayAllClients():void{
    this.getAgences();
    this.getClients();
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

  OnSaveClient(f:NgForm){


    console.log(f.value);
    this.clientService.addClient(f.value).subscribe(
      (response: Client) => {
          console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
/*
    console.log(f.nom);
    this.clientAj.setNom = f.nom;
    this.agenceService.getAgenceById(f.agence).subscribe(
      (response: Agence) => {
        this.clientAj.agence = response;  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.clientAj.prenom = f.prenom;
    this.clientAj.email = f.email;
    this.clientAj.tele = f.tele;
    this.clientService.addClient(this.clientAj).subscribe(
      (response: Client) => {
          console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
*/
}
}

