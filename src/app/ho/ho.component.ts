import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { __values } from 'tslib';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from '../data.service';


@Component({
  selector: 'app-ho',
  templateUrl: './ho.component.html',
  styleUrl: './ho.component.scss'
})
export class HoComponent {
  

  ContactForm: FormGroup = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    City: new FormControl('', [Validators.required,Validators.minLength(2)]),
    Phone: new FormControl('', [Validators.required,Validators.minLength(2)]),
  })

  currentTime = new Date().toLocaleString();
  
  

  submitted = false;
  FormValue : any;
   
  check = this.ContactForm;
 
  constructor (private data : DataService , private router : Router){}

  ngOnInit() : void {
    
    this.FormValue = this.data.getData();
    console.log(this.currentTime)
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.ContactForm.controls;
  }

  setValueName() {
    
    this.ContactForm.patchValue({
      Name: this.FormValue.Name,
      City: this.FormValue.City,
      Phone: this.FormValue.Phone
      
    });
  }

   OnClick() 
   
   {
    //debugger
    this.submitted = true;
    if(this.ContactForm.invalid) {
      return
    }else{
      this.router.navigate(["/aws"]);
    }
    
    
    console.log(this.check)
    window.alert("Submitted Successfully!");
    
    
  } 

  

  
  }
 
  
  








