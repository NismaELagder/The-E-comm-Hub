import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  info: FormGroup = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  successMessage: string = '';
  empty: boolean = true;
  ngDoCheck() {}
  onSend() {
    // for now we will just show a message , no real connection
    this.successMessage = 'Thanks for connection. We will be in touch soon!';
    this.info.reset();
    setTimeout(() => (this.successMessage = ''), 1000);
  }
}
