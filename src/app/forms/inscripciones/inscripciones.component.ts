import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  foods: Food[] = [
    {value: '0', viewValue: 'Curso de protección alutras - de 4/6/2021 a 4/12/2021'},
    {value: '1', viewValue: 'Curso de Anclaje - de 4/6/2021 a 4/12/2021'},
    {value: '2', viewValue: 'Curso de mantenimiento de tejados - de 4/6/2021 a 4/12/2021'}
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
    

    
  }

}
