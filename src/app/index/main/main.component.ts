import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Empresa:string;
  Name = 'Usuario';


  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.Empresa = this.cookieService.get('company');

  }

}
