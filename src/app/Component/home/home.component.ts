import { Component } from '@angular/core';
import { Customer } from '../../customer.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customers: Customer[] = [];
  currentCustomer: Customer = { id: 0, name: '', email: '' };
  isEditing: boolean = false;

  editCustomer(customer: Customer) {
    this.currentCustomer = { ...customer };
    this.isEditing = true;
  }

  deleteCustomer(customer: Customer) {
    // Delete customer logic here
  }

  saveCustomer() {
    if (this.isEditing) {
      // Update customer logic here
    } else {
      // Add customer logic here
    }
    this.currentCustomer = { id: 0, name: '', email: '' };
    this.isEditing = false;
  }
  cancelEdit() {
    this.currentCustomer = { id: 0, name: '', email: '' };
    this.isEditing = false;
  }
}
