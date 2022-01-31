import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  onRegister(userDetails: any) {
    return this.http.post<any>(`${environment.baseURL}`, userDetails)
  }
}
