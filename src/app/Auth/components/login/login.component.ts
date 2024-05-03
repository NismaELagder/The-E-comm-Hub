import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private Router: Router, private service: AuthService) {}
  loginMessage = '';

  user: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  ngOnInit() {
    if ('isLoggedIn' in localStorage && 'currentUser' in localStorage) {
      this.Router.navigateByUrl('');
    }
  }

  onLogin() {
    this.service
      .login(
        this.user.controls['email'].value,
        this.user.controls['password'].value
      )
      .subscribe((res: any) => {
        if (res) {
          this.loginMessage = 'User loggedin successfully';
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem(
            'currentUser',
            JSON.stringify({
              accountType: res.accountType,
              id: res.id,
              username: res.username,
            })
          );

          setTimeout(() => this.Router.navigateByUrl(''), 1000);
        } else {
          console.log(res);
          this.loginMessage = "User doesn't exist";
          setTimeout(() => this.Router.navigateByUrl('signup'), 1000);
        }
      });
  }
}
