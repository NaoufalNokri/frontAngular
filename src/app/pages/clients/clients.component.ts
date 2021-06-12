import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agence } from 'src/app/interfaces/Agence';

import { Client } from 'src/app/interfaces/client';
import { AgenceService } from 'src/app/services/agence.service';
import { ClientService } from 'src/app/services/client.service';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
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
        this.dtTrigger.next();
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
}

