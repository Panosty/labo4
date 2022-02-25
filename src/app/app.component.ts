import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs : any = [{label: "Distance", link: "/distance"}, {label: "Temperature", link: "/temperature"}]
  title = 'Convertisseur d\'unités de mesure';
}
