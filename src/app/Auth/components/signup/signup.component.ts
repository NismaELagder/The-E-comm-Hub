import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router, private service: AuthService) {}
  user: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    username: new FormControl('', [Validators.minLength(3)]),
  });
  accountType: string = '';
  signUpMessage = '';
  showMessage: boolean = false;

  ngOnInit() {
    if ('isLoggedIn' in localStorage && 'currentUser' in localStorage) {
      this.router.navigateByUrl('');
    }
  }

  onSignup() {
    if (this.accountType && this.user.valid) {
      this.service
        .emailCheck(this.user.controls['email'].value)
        .subscribe((res) => {
          console.log('result', res);
          if (res) {
            this.signUpMessage = 'Email already exists!';
            this.showMessage = true;
            setTimeout(() => this.router.navigateByUrl('login'), 1000);
          } else {
            this.service
              .signUp(
                this.user.controls['email'].value,
                this.accountType,
                this.user.controls['username'].value,
                this.user.controls['password'].value
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
  }
}
