import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private Router: Router) {}

  isLoggedIn: boolean = false;
  isSeller: boolean = false;
  hideBtn: boolean = false;
  showDashboardBtn: boolean = false;

  ngOnInit() {
    this.Router.events.subscribe((event: any) => {
      // console.log(event.url);
      this.isSeller =
        JSON.parse(localStorage.getItem('currentUser')!)?.accountType ===
        'seller';
      if (localStorage.getItem('isLoggedIn')) {
        this.hideBtn = true;
      }

      if (localStorage.getItem('isLoggedIn') && this.isSeller) {
        this.showDashboardBtn = true;
      }
    });
  }

  // const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  // if ('isLoggedIn' in localStorage) {
  //   this.isLoggedIn = true;
  // }

  // if ('currentUser' in localStorage && currentUser.accountType === 'seller') {
  //   this.isSeller = true;
  // }
}
