import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  employee = {
    name: 'Fernando',
    country: 'México',
    age: '30',
    phone: '5566998877',
    gender: 'M'
  }

  users : any[] = [
    {
      name: 'Pedro',
      gender: 'H'
    },
    {
      name: 'Laura',
      gender: 'M'
    },
  ];

  items0 : any[] = [];

  items1 : any[] = [
    {
      name: 'Pizza',
    },
  ];

  items2 : any[] = [
    {
      name: 'Pizza',
    },
    {
      name: 'Hamburguesa',
    },
  ];

  items3 : any[] = [
    {
      name: 'Pizza',
    },
    {
      name: 'Hamburguesa',
    },
    {
      name: 'Papas',
    },
  ];
  
  mappingUsers = {
    'H': 'Bienvenido',
    'M': 'Bienvenida'
  }

  mappingItems = {
    '=0': 'no tiene ningún producto',
    '=1': 'tiene un producto',
    'other': 'tiene # productos'
  }


  observableNumber = interval(1000);

  constructor() { }

  ngOnInit() {
  }

}
