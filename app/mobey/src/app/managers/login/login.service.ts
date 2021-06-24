import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private navCtrl: NavController) {}

  async isAuth(): Promise<boolean> {
    if (true) {
      await this.navCtrl.navigateRoot('/login');
      return false;
    }
    return true;
  }
}
