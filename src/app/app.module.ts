import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { AIComponent } from './ai/ai.component';
import { AwsComponent } from './aws/aws.component';
import { CommonModule } from '@angular/common';
import { HoComponent } from './ho/ho.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    AIComponent,
    AwsComponent,
    HoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    

    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
