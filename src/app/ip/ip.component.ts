import { Component } from '@angular/core';
import { IpServiceService } from '../ip-service.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.scss'
})
export class IpComponent {

  constructor(private ip:IpServiceService){this.ipAddress}  
  
  ipAddress = [];
  
ngOnInit()  
  {  
    this.getIP();  
  }  
  getIP()  
  {  
    this.ip.getIPAddress().subscribe((res:any)=>{  
     console.log(this.ipAddress=res.ip)
    });  
  }  
}  


