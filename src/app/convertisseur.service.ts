import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertisseurService {

  constructor() { }

  milesToKm(valeur: number): number{
    return valeur*1.609344;
  }

  KmToMiles(valeur: number): number{
    return valeur/1.609344;
  }

  ReaumurToCelcius(valeur: number){
    return valeur*1.25;
  }

  CelciusToReaumur(valeur: number){
    return valeur/1.25;
  }
}
