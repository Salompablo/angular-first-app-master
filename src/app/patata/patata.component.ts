import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patata',
  templateUrl: './patata.component.html',
  styleUrls: ['./patata.component.scss']
})
export class PatataComponent implements OnInit {
  months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May'
  ];
  random: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.random = Math.floor(Math.random() * (this.months.length + 1));
    console.log(this.random);
  }

}
