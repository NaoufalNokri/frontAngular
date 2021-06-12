import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js';
import { environment } from 'src/environments/environment';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public nombre_client:any;
  public nombre_agence:any;
  public nombre_agent:any;
  public nombre_virement:any="15";

  constructor(private http: HttpClient) { }

  OnGetAllAgence(){
    this.http.get(environment.apiBaseUrl+"/agence/all")
                              .subscribe(
                                (res) =>{
                                  this.nombre_agence=Object.keys(res).length;
                                
                                
                              },err=>{
                              console.log(err);
                              })


}
    
  OnGetAllClient(){
    this.http.get(environment.apiBaseUrl+"/client/all")
                              .subscribe(
                                (res) =>{
                                  this.nombre_client=Object.keys(res).length;
                                
                                
                              },err=>{
                              console.log(err);
                              })


  }

  OnGetAllAgent(){
    this.http.get(environment.apiBaseUrl+"/agent/all")
                              .subscribe(
                                (res) =>{
                                  this.nombre_agent=Object.keys(res).length;
                                
                                
                              },err=>{
                              console.log(err);
                              })  


  }
  
  OnGetAllVirement(){
    this.http.get(environment.apiBaseUrl+"/virement/all")
                              .subscribe(
                                (res) =>{
                                  this.nombre_virement=Object.keys(res).length;
                                
                                
                              },err=>{
                              console.log(err);
                              })  


  }

  

  ngOnInit() {
    this.OnGetAllClient();
    this.OnGetAllAgence();
    this.OnGetAllAgent();
    this.OnGetAllVirement();
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
