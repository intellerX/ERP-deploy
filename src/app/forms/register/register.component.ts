import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EnterpriseService } from '../../services/enterprise.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private enterpriseService: EnterpriseService) { }



  form = new FormGroup({

    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    password2: new FormControl('', [Validators.required, Validators.minLength(8)]),

    nit: new FormControl('', [Validators.required, Validators.minLength(5)]),

    state: new FormControl('', [Validators.required, Validators.minLength(3)]),

    city: new FormControl('', [Validators.required, Validators.minLength(3)]),

    address: new FormControl('', [Validators.required, Validators.minLength(3)]),


  });

  get f() {

    return this.form.controls;

  }



  submit() {

    
    if (this.form.valid) {
      if (this.form.controls.password.value === this.form.controls.password2.value) {
        delete this.form.value["password2"];
        this.form.value["module"]=[];
        this.enterpriseService.post(this.form.value).subscribe({
          next: value => {
            console.log(value);
          }, error: error => {
            console.log(error);
          }
        })

      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          text: 'Valida los campos para contraseñas'
        })
      }
    }
    else {
      Object.keys(this.form.controls).forEach(key => {
        if (this.form.controls[key].status == "INVALID") {
          Swal.fire({
            icon: 'error',
            title: 'Valor invalido',
            text: 'Valida el campo: ' + key
          })
        }
        console.log(this.form.controls[key]);
      });


    }

  }

  ngOnInit(): void {
  }

  alert() {
    console.log("nice");
  }



}
