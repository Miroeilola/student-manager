import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const endpoint = environment.apiUrl + '/login';
    return this.http.post<any>(endpoint, { username, password });
  }

  register(username: string, password: string) {
    const endpoint = environment.apiUrl + '/register';
    return this.http.post<any>(endpoint, { username, password });
  }
}
