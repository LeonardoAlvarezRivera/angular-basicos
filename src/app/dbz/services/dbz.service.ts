import { Injectable } from "@angular/core";
import { ThemeService } from "ng2-charts";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService
{

    private _personajes:Personaje[] = [
        {
          nombre: "Krillin",
          poder: 700
        },
        {
          nombre: "Goku",
          poder: 15000
        }
      ];
    
    nuevo: Personaje = {
    nombre: '',
    poder: 0
    }
    
      
    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    agregar(personaje:Personaje){
        this._personajes.push(personaje);
    }

      
    constructor(){
    }

}