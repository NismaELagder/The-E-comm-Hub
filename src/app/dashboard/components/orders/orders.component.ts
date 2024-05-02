import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders!: any[];
  constructor(private service: DashboardService) {}
  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    const seller_id = JSON.parse(localStorage.getItem('currentUser')!).id;
    this.service
      .getOrders(seller_id)
      .subscribe((data: any) => (this.orders = data));
  }
}
