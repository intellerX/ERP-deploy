import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {



  constructor(private cookieService: CookieService, private router: Router) { }
  private cookieName: string;

  public app_name = "Login";
  public end_session = "Cerrar Sesión";

  ngOnInit(): void {
    this.cookieName = this.cookieService.get('company');
    if (this.cookieName == null || this.cookieName == "") {
      this.app_name = "Login";
      this.end_session = "Inicia Sesión";

    }
    else {
      this.app_name = this.cookieName; 
      this.end_session = "Cerrar Sesión";
    }

  }

  endSession() {
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

}
