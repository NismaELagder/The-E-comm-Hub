import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  info: any = { message: '', name: '', email: '' };
  showMessage: boolean = false;
  successMessage: string =
    'Thanks for connection. We will be in touch with you soon!';
  empty: boolean = true;
  ngDoCheck() {
    if (
      this.info.name == '' ||
      this.info.message == '' ||
      this.info.email == ''
    ) {
      this.empty = true;
    } else {
      this.empty = false;
    }
  }
  onSend() {
    // for now we will just show a message , no real connection
    this.showMessage = true;
  }
}
