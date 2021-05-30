import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  async shopClk() {
    const { value: formValues } = await Swal.fire({
      title: 'Datos:',
      html:
        '<img src="https://img.icons8.com/dusk/64/000000/mastercard-credit-card.png"/> <br>'+
        'Numero de tarjeta: <input placeholder="9999-9999-9999-9999" id="swal-input1" class="swal2-input"> ' +
        '<br><br> Fecha:<br> <input placeholder="MM/DD" id="swal-input2" class="swal2-input">'+
        '<br><br> CVC:<br> <input placeholder="123" id="swal-input3" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        var inputValue = (<HTMLInputElement>document.getElementById('swal-input1')).value;
        var inputValue2 = (<HTMLInputElement>document.getElementById('swal-input2')).value;

        return [          
          "Comprueba los Siguientes campos: ",inputValue,inputValue2
        ]
      }
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  }

}
