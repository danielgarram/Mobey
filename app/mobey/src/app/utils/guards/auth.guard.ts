import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginService } from '../../managers/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private loginService: LoginService) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isAuth();
  }
}
