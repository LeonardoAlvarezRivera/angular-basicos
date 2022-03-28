import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{title}} </h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <button (click)="up()">+ 1</button>
        <span> {{counter}} </span>
        <button (click)="down()">- 1</button>

        <button (click)="plus(base)">+ {{base}}</button>
        `
})

export class ContadorComponent{
    title: string = 'Contador app';
    counter: number = 0;
    base: number = 5;
  
    up(){
      this.counter++;
    }
  
    down(){
      this.counter--;
    }
  
    plus(value: number){
      this.counter += value;
    }
}