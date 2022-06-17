import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticesFormsComponent } from '../forms/practices-forms/practices-forms.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'practices-forms', component: PracticesFormsComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
