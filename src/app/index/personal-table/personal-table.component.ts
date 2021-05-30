import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-personal-table',
  templateUrl: './personal-table.component.html',
  styleUrls: ['./personal-table.component.css']
})
export class PersonalTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async RegistrarPersonal() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos:',
      html:
        '<input placeholder="Nombre" id="swal-input1" class="swal2-input"> ' +
        '<input placeholder="Fecha" id="swal-input2" class="swal2-input">' +    
        '<input placeholder="CC" id="swal-input4" class="swal2-input">'
        ,
      input: 'select',
      inputOptions: {
        'Cargos': {
          one: 'Compras',
          two: 'Ventas',
          tree: 'RRHH',
          four: 'Operación',
          five: 'Supervisor'

        },
      },
      inputPlaceholder: 'Cargo',
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
