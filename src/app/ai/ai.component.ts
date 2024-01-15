import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AIComponent {
  registerform = new FormGroup({
    firstname : new FormControl("", [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    Lname : new FormControl("", [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("",[Validators.required, Validators.email]),
    mob : new FormControl("", [Validators.required, Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
    gender : new FormControl("", Validators.required),
    pwd : new FormControl("", [Validators.required, Validators.maxLength(10)]),
    rpwd : new FormControl("")
  });

  submitted = false;

  repeatPass:string = 'none';

  

   get firstname(): FormControl {
     return this.registerform.get('firstname') as FormControl;
   }
   get LastName(): FormControl {
     return this.registerform.get('Lname') as FormControl;
   }
   get Email(): FormControl {
     return this.registerform.get('email') as FormControl;
   }
   get Mobile(): FormControl {
     return this.registerform.get('mob') as FormControl;
   }
   get Gender(): FormControl {
     return this.registerform.get('gender') as FormControl;
   }
   get PWD(): FormControl {
     return this.registerform.get('pwd') as FormControl;
   }
   get RPWD(): FormControl {
     return this.registerform.get('rpwd') as FormControl;
   }

  registerSubmit(){
    this.submitted = true;
    if(this.registerform.invalid) {
      return
    }
    }

    get f(): { [key: string]: AbstractControl } {
      return this.registerform.controls;
    }
  }



//if(this.PWD.value == this.RPWD.value){
     // console.log(this.registerform.valid);
      //this.repeatPass = 'none' 
    //else{
      //this.repeatPass = 'inline'