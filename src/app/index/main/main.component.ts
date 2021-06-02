import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Empresa: string;
  Name = 'Usuario';


  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.Empresa = this.cookieService.get('company');
    if (this.Empresa == "") {
      this.router.navigate(['/login']);

      
    }

  }

  endSession() {
    this.cookieService.deleteAll();
    this.cookieService.delete('company');
    this.router.navigate(['/login']);
  }

}
