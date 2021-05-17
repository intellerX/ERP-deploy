import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  clickEvent(){
    Swal.fire({
      icon: 'error',
      text: 'Verifica los campos!',
    })
  }

  ngOnInit(): void {
  }

}
