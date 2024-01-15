import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import * as XLSX from "xlsx";
import { Xliff2 } from '@angular/compiler';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})
export class AwsComponent {
  

  constructor(private data:DataService , private router : Router){}

  displayedColumns = ['Name', 'City', 'Phone'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  ngOnInit() {
    
  }
  
 //r1click(){
   // debugger
    //let values = {
      //Name:"Hardik",
      //City:"Surat"
    //}
    //this.data.setData(values),

    //this.router.navigate([""]);
  //}

  FilterName(filterValue : string){

    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.Name.toLowerCase().includes(filter) || data.Name.toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
  
  FilterNumber(filterValue : string){

    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.City.toLowerCase().includes(filter) || data.City.toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  
  FilterPhone(filterValue : string){

    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.Phone.toLowerCase().includes(filter) || data.Phone.toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  ExcelName = "excel.xlsx";

  exportTable() {
    let data = document.getElementById("InternData");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'sheet1' )
    XLSX.writeFile(wb,this.ExcelName)
  }
  

  onCLick(i : any){
    console.log(i);
debugger
    
    this.data.setData(i),

    this.router.navigate([""]);
  }

}

export interface Element {
  Name: string;
  City: string;
  Phone: string;
}
const ELEMENT_DATA: Element[] = [
  {Name: "Hardik",City : "Surat",Phone: "999999999"},
  {Name: "Neel",City : "Ahmedabad",Phone: "999999998"},
  {Name: "Yash",City : "Vadodara",Phone: "999999997"},
  {Name: "Sumit",City : "Surat",Phone: "999999996"},
  {Name: "Rishabh",City : "Ahmedabad",Phone: "999999995"},
  {Name: "Prakhar",City : "Vadodara",Phone: "999999994"},
  {Name: "Rishi",City : "Surat",Phone: "999999993"},
  {Name: "Shreyansh",City : "Hyderabad",Phone: "999999992"},
  {Name: "Nihar",City : "Aurangabad",Phone: "999999991"},
  {Name: "Vamsi",City : "Hyderabad",Phone: "999999990"},

];