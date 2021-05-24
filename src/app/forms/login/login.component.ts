import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '@app/_models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
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
      this.login(this.form.controls.email, this.form.controls.password);
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

  login(email, password) {
    return this.http.post<User>(`erp-pg2-backend.herokuapp.com/api/v1/enterprises`, { email, password })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

}
