import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({


    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(8)]),



  });

  constructor(private authService: AuthService ) { }

  clickEvent() {
    Swal.fire({
      icon: 'error',
      text: 'Verifica los campos!',
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.form.value["keep_logged_in"]=true;
      this.authService.post(this.form.value).subscribe({
        next: value => {
          console.log(value);
          
        }, error: error => {
          console.log(error);
        }
      })
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



}
