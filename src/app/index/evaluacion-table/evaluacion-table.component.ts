import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { PersonalService } from '../../services/personal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-evaluacion-table',
  templateUrl: './evaluacion-table.component.html',
  styleUrls: ['./evaluacion-table.component.css']
})
export class EvaluacionTableComponent implements OnInit {

  modules = [];
  module_actual = false;

  constructor(private personalService: PersonalService, private cookieService: CookieService) { }

  valitadeModule() {
    for (let index = 0; index < this.modules.length; index++) {
      if (this.modules[index] == "Valoracion") {
        console.log("si");
        this.module_actual = true;
      }
    }

    if (this.module_actual) {

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Debes comprar el módulo en la tienda'
      })
    }

  }

  ngOnInit(): void {
    this.modules = JSON.parse(this.cookieService.get('modules'));
    this.valitadeModule();

  }

  async addEvaluation() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos:',
      html:
        '<input placeholder="Nombre" id="swal-input1" class="swal2-input"> ' +
        '<input placeholder="Fecha" id="swal-input2" class="swal2-input">' +
        '<input placeholder="Tipo" id="swal-input2" class="swal2-input">' +
        '<input placeholder="Evaluado por" id="swal-input2" class="swal2-input">' +
        '<input placeholder="Calificación" id="swal-input2" class="swal2-input">' +
        '<input placeholder="Comentarios" id="swal-input2" class="swal2-input">',

      focusConfirm: false,
      preConfirm: () => {
        var inputValue = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        var inputValue2 = (<HTMLInputElement>document.getElementById('swal-input2')).value;

        return [
          "Comprueba los Siguientes campos: ", inputValue, inputValue2
        ]
      }
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

}
