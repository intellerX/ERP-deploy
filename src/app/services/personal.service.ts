import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  post(body) {
    return this.http.post(environment.backendUrl + "employer", body)
  }

  get() {

    return this.http.get(environment.backendUrl + "employer", { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookieService.get('token') }) })
  }
}
