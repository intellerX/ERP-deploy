import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  Empresa: string;


  constructor(private cookieService: CookieService, private router: Router) { }

  checkpersonal = false;
  checknomina = false;
  checkinformes = false;
  checkevaluacion = false;
  total_price = 0;

  ngOnInit(): void {


  }

  async shopClk() {
    this.Empresa = this.cookieService.get('company');
    if (this.Empresa == "") {
      this.router.navigate(['/login']);
    }
    else {
      const { value: formValues } = await Swal.fire({
        title: 'Datos:',
        html:
          '<img src="https://img.icons8.com/dusk/64/000000/mastercard-credit-card.png"/> <br>' +
          'Numero de tarjeta: <input placeholder="9999-9999-9999-9999" id="swal-input1" class="swal2-input"> ' +
          '<br><br> Fecha:<br> <input placeholder="MM/DD" id="swal-input2" class="swal2-input">' +
          '<br><br> CVC:<br> <input placeholder="123" id="swal-input3" class="swal2-input">',
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

  checkPersonal(event: any) {
    if (event == 'A') {
      this.total_price += 50000;
      
    }
    else{
      this.total_price -= 50000;
    }
  }

  checkNomina(event: any) {
    if (event == 'A') {
      this.total_price += 30000;
      
    }
    else{
      this.total_price -= 30000;
    }
  }

  checkInformes(event: any) {
    if (event == 'A') {
      this.total_price += 50000;
      
    }
    else{
      this.total_price -= 50000;
    }
  }

  checkEvaluacion(event: any) {
    if (event == 'A') {
      this.total_price += 50000;
      
    }
    else{
      this.total_price -= 50000;
    }
  }

}
