import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
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
    }, 100);

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
}

