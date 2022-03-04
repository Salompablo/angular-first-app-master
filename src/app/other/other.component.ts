import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  public id: number = -1;
  public name: string;
  public isViewFirst: boolean;
  public items: string[] = ['Manzana', 'Pera', 'Melocotón', 'Melón'];

  constructor() { }

  ngOnInit(): void {
    this.name = 'Mario';
    this.isViewFirst = true;

    const num1 = 4;
    const num2 = 7;

    const result = this.sum(num1, num2);
    console.log('Res:', result);
  }

  sum(param1: number, param2: number): number {
    const res = param1 + param2;
    return res;
  }

  onButtonClick(): void {
    console.log('Cambio!');
    this.name = 'Pepe';
    this.isViewFirst = !this.isViewFirst;
  }
}
