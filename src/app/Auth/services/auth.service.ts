import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  emailCheck(email: string) {
    return this.http
      .get('http://localhost:3000/users')
      .pipe(
        map((users: any) => users.find((user: any) => user.email === email))
      );
  }

  signUp(
    email: string,
    accountType: string,
    username: string,
    password: string
  ) {
    const newUser = { email, accountType, username, password };
    const stringify = JSON.stringify(newUser);

    return this.http.post('http://localhost:3000/users', stringify, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  login(email: string, password: string) {
    return this.http
      .get('http://localhost:3000/users')
      .pipe(
        map((users: any) =>
          users.find(
            (user: any) => user.email === email && user.password === password
          )
        )
      );
  }
}
