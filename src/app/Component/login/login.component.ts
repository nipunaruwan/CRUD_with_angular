import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  onSubmit() {
    // Perform authentication logic here
    // For demonstration purposes, let's just log the username and password
    console.log('Username:', this.username);
    console.log('Password:', this.password);

 

}

}