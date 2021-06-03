import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { PersonalService } from '../../services/personal.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.css']
})
export class ConfigTableComponent implements OnInit {

  modules = [];
  module_actual = false;

  constructor(private personalService: PersonalService, private cookieService: CookieService) { }

  valitadeModule() {
    for (let index = 0; index < this.modules.length; index++) {
      if (this.modules[index] == "Nomina") {
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

  async addCargo() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos:',
      html:
        '<input placeholder="Cargo" id="swal-input1" class="swal2-input"> ',
      focusConfirm: false,
      preConfirm: () => {
        var inputValue = (<HTMLInputElement>document.getElementById('swal-input1')).value;

        return [
          "Comprueba los Siguientes campos: ", inputValue,
        ]
      }
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

}
