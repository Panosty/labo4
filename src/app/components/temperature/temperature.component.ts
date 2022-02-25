import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from 'src/app/convertisseur.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  private _reaumur: string = '';
  private _celcius: string = '';

  constructor(private _covertisseurService: ConvertisseurService) { }

  get reaumur(): string{
    return this._reaumur
  }

  set reaumur(valeur: string){
    this._reaumur = valeur
  }

  get celcius(): string{
    return this._celcius;
  }

  set celcius(valeur: string){
    this._celcius = valeur;
  }

  ReaumurToCelcius(){
    const convrtis = this._covertisseurService.ReaumurToCelcius(Number(this._reaumur))
    const conversionString: string = convrtis.toString();
    this._celcius = conversionString;
  }

  CelciusToReaumur(){
    const convrtis = this._covertisseurService.CelciusToReaumur(Number(this._celcius))
    const conversionString: string = convrtis.toString();
    this._reaumur = conversionString;
  }


  ngOnInit(): void {
  }

}
