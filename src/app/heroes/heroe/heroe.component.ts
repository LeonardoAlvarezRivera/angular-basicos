import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number= 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    getName(): string {
        return this.nombre + ' - ' + this.edad.toString();
    }

    changeName():void{
        this.nombre = 'Spiderman';
    }

    changeAge():void{
        this.edad = 23;
    }
}