import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DistanceComponent } from './components/distance/distance.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

const routes: Routes = [
  { path: 'distance', component: DistanceComponent },
  { path: 'temperature', component: TemperatureComponent },
 ];
 
 @NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
