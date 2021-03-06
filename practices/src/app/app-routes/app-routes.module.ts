import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticesFormsComponent } from '../main/practices-forms/practices-forms.component';
import { HomeComponent } from '../home/home.component';
import { PipesComponent } from '../main/pipes/pipes.component';
import { MomemtJsComponent } from '../main/momentJS/momemt-js/momemt-js.component';


const routes: Routes = [
  //{ path: '', component:  HomeComponent, pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'practices-forms', component: PracticesFormsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'moment', component: MomemtJsComponent },
  { path: '**', redirectTo: '/home'},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
