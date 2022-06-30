import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  users : any[] = [
    {
      name: 'Pedro',
      gender: 'H'
    },
    {
      name: 'Laura',
      gender: 'M'
    },
  ]


  mapping = {
    'H': 'Bienvenido',
    'M': 'Bienvenida'
  }

  constructor() { }

  ngOnInit() {
  }

}
