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
  hideNav: boolean = false;
  highlightBtn: boolean = false;
  ngOnInit() {
    this.Router.events.subscribe((event: any) => {
      if (event.url == '/login' || event.url.includes('signup')) {
        console.log(event.url);
        this.hideNav = true;
        this.highlightBtn = true;
      } else {
        this.hideNav = false;
      }
      this.isSeller =
        JSON.parse(localStorage.getItem('currentUser')!)?.accountType ===
        'seller';
      if (localStorage.getItem('isLoggedIn')) {
        this.hideBtn = true;
      } else {
        this.hideBtn = false;
      }

      if (localStorage.getItem('isLoggedIn') && this.isSeller) {
        this.showDashboardBtn = true;
        console.log(localStorage.getItem('isLoggedIn'));
        console.log(this.isSeller);
      } else {
        this.showDashboardBtn = false;
      }
      console.log(this.showDashboardBtn);
    });
  }
  onLogout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    this.Router.navigateByUrl('');
  }

  // const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  // if ('isLoggedIn' in localStorage) {
  //   this.isLoggedIn = true;
  // }

  // if ('currentUser' in localStorage && currentUser.accountType === 'seller') {
  //   this.isSeller = true;
  // }
}
