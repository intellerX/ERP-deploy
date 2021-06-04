import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  post( body ){
    return this.http.post(environment.backendUrl+"assessment", body )
  }

  get() {
    return this.http.get(environment.backendUrl + "assessment", { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.cookieService.get('token') }) })
  }}
