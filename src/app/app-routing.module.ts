import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './land/land.component';
import { AIComponent } from './ai/ai.component';
import { AwsComponent } from './aws/aws.component';

const routes: Routes = [
  {
    path: '',
    component:LandComponent
  },
  {
    path: 'aiml',
    component:AIComponent
  },
  {
    path: 'aws',
    component:AwsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
