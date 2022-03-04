import { Component, OnInit } from '@angular/core';
import { ImgModel, UserModel } from '../models/user.model';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  color: string = 'red';
  user: UserModel = {
    name: 'Mario',
    age: 30
  };
  userList: UserModel[] = [];
  img: ImgModel = {
    src: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg',
    alt: 'gatitos'
  }

  constructor() { }

  ngOnInit(): void {
    console.log(2);
    console.log('El color elegido es', this.color);
    console.log(this.user);
    this.userList.push({
      name: 'Pepe',
      age: 22
    });
    this.userList.push({
      name: 'Lucia',
      age: 23,
      gender: 'female'
    });
    console.log(this.userList);
  }

  sayHello(): string {
    return 'Hello clase';
  }

  sum2Nums(a: number, b: number): number {
    return a + b;
  }

}
