import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LangService } from './utils/lang/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private langService: LangService) {
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.langService.init();
    });
  }
}
