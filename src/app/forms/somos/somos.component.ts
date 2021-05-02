import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        opacity: '0'
      })),
      state('out', style({
        opacity: '1'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class SomosComponent implements OnInit {

  helpMenu: string;

  public animation(): void {
    this.helpMenu = 'in';
    setTimeout(() => { this.helpMenu = 'out' }, 400);
  }

  ngOnInit(): void {
    this.animation();
  }

  toggleHelpMenu(): void {
    this.helpMenu = this.helpMenu === 'out' ? 'in' : 'out';
  }

  public parr: string;
  public titulo: string;
  
  constructor() {
    this.parr = `Formar trabajadores con capacidad técnica e inteligencia para asegurar su integridad y calidad de vida al enfrentar de manera eficiente las tareas de alto riego.
    Ser aliado estratégico de nuestros clientes para optimizar sus recursos en formación y desarrollo organizacional.
    `;
    this.titulo = "Misión";
  }

  public changeM(): void {
    this.animation();
    setTimeout(() => {
      this.parr = `Formar trabajadores con capacidad técnica e inteligencia para asegurar su integridad y calidad de vida al enfrentar de manera eficiente las tareas de alto riego.
    Ser aliado estratégico de nuestros clientes para optimizar sus recursos en formación y desarrollo organizacional.
    `;
      this.titulo = "Misión";
    }, 400);

  }

  public changeV(): void {
    this.animation();
    setTimeout(() => {

      this.parr = "Ser la empresa referente en desarrollo y formación de competencias laborales. Reconocidos por nuestra alta calidad técnica y académica, innovación pedagógica, agilidad y eficiencia en el servicio.";
      this.titulo = "Visión";
    }, 400);
  }

  public changeO(): void {
    this.animation();
    setTimeout(() => {

      this.parr = `Posicionarse como uno de los mejores centros de formación del país.
    Ser rentables y sostenibles.
    Brindar un servicio de calidad ágil y eficiente.
    Innovar y fomentar metodología, técnicas y recursos que permitan identificarnos como pioneros en las áreas de influencia.
    Fidelizar a través e estrategias de mercado y cercanía con los clientes.
    `;
      this.titulo = "Objetivos";
    }, 400);
  }


}
