import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { username, password });
  }

  register(username: string, password: string) {
    return this.http.post<any>('http://localhost:3000/register', { username, password });
  }
}
