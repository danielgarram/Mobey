import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('emailInput') emailInput: IonInput;
  @ViewChild('passwordInput') passwordInput: IonInput;

  constructor() { }

  loginUser = {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  doLogin(formLogin: NgForm) {
    console.log('doLogin',formLogin.hasError('required', 'password'))
    if (formLogin.invalid) {
      if (formLogin.hasError('required', 'password')) {
        this.passwordInput.setFocus();
      }

      if (formLogin.hasError('required', 'username')) {
        this.emailInput.setFocus();
      }
      return;
    }
  }
}
