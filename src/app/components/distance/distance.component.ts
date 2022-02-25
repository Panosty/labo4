import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from 'src/app/convertisseur.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  private _miles: string = '';
  private _km: string = '';

  constructor(private _covertisseurService: ConvertisseurService) { }

  get miles(): string {
    return this._miles
  }

  set miles(valeur: string) {
    this._miles = valeur
  }

  get km(): string {
    return this._km;
  }

  set km(valeur: string) {
    this._km = valeur;
  }

  milesToKm() {
    const convrtis = this._covertisseurService.milesToKm(Number(this._miles))
    const conversionString: string = convrtis.toString();
    this._km = conversionString;
  }

  KmTomiles() {
    const convrtis = this._covertisseurService.KmToMiles(Number(this._km))
    const conversionString: string = convrtis.toString();
    this._miles = conversionString;
  }


  ngOnInit(): void {
  }

}
