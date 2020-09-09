import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Login } from '../shared/modals/user.modal';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login
  constructor(private loginser: LoginService, private router: Router) {
    this.login = new Login()
  }
  valid: any
  ngOnInit() {
  }
  user_id: any
  message1: any
  message2: any
  Keyname(event: any) {
    //alert(this.t)

    const pattern = /[^\s]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  userlogin(login) {
    //alert('hi')
    debugger
    this.router.navigateByUrl('project/create')
    // this.message1 = "";
    // this.message2 = "";
    // this.loginser.login(login).then((data) => {
    //   debugger
    //   console.log(data)
    //   console.log(data[0].message)
    //   // this.user_id=data[0].user_id

    //   if (data[0].message == "User not exist") {
    //     this.message2 = "User not exist";
    //   }
    //   if (data[0].message == "Password Not exists") {
    //     this.message1 = "Password Not exists";
    //   }
    //   if (data[0].message == "User already exist") {
    //     sessionStorage.setItem('id', data[0].user_id);
    //     sessionStorage.setItem('role  id', data[0].role_id);
    //     if (data[0].role_id == "1") {

    //       this.router.navigate(['home/userhome'])
    //     }
    //     if (data[0].role_id == "2") {

    //       this.router.navigate(['home/companyhome'])

    //     }
    //   }
    // })

  }
  register() {
    this.router.navigate(['home/register'])
  }
}
