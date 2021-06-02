import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { PersonalService } from '../../services/personal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-personal-table',
  templateUrl: './personal-table.component.html',
  styleUrls: ['./personal-table.component.css']
})
export class PersonalTableComponent implements OnInit {

  modules = [];
  module_employments = false;

  constructor(private personalService: PersonalService,private cookieService: CookieService) { }

  ngOnInit(): void {
    console.log(this.personalService.get().subscribe({
      next: value => {
        //console.log(value);
        this.modules = JSON.parse(this.cookieService.get('modules'));

        console.log(this.modules);
        
        for (let index = 0; index < this.modules.length; index++) {
          if (this.modules[index] == "Empleados") {
            console.log("si");           
            this.module_employments = true;
          }         
        }

        if (this.module_employments) {
          
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Debes comprar el módulo PERSONAL en la tienda'
          })
        }
      
        

      }, error: error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Debes comprar el módulo PERSONAL en la tienda'
        })
      }
    }))
    
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
