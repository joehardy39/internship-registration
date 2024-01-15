import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
 data : any;

  constructor() { }

  

  setData(data: any) {
    //debugger
    this.data = data;
  }
  getData() {
    return this.data
  }
}
