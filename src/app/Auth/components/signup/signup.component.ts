import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router, private service: AuthService) {}
  user = { accountType: '', username: '', email: '', password: '' };
  signUpMessage = '';
  showMessage: boolean = false;
  ngOnInit() {
    if ('isLoggedIn' in localStorage && 'currentUser' in localStorage) {
      this.router.navigateByUrl('');
    }
  }

  onSignup() {
    if (
      this.user.accountType &&
      this.user.username &&
      this.user.email &&
      this.user.password
    ) {
      this.service.emailCheck(this.user.email).subscribe((res) => {
        console.log('result', res);
        if (res) {
          this.signUpMessage = 'Email already exists!';
          this.showMessage = true;
          setTimeout(() => this.router.navigateByUrl('login'), 1000);
        } else {
          this.service
            .signUp(
              this.user.email,
              this.user.accountType,
              this.user.username,
              this.user.password
            )
            .subscribe((result: any) => {
              this.signUpMessage = 'Account successfully created';
              this.showMessage = true;
              localStorage.setItem(
                'currentUser',
                JSON.stringify({
                  id: result.id,
                  username: result.username,
                  accountType: result.accountType,
                })
              );

              localStorage.setItem('isLoggedIn', 'true');
              setTimeout(() => {
                this.router.navigateByUrl('');
              }, 1000);
            });
        }
      });
    }

    if (
      !this.user.email ||
      !this.user.accountType ||
      !this.user.password ||
      !this.user.username
    ) {
      this.showMessage = true;
      this.signUpMessage = 'All fields are required';
    }
  }
}
