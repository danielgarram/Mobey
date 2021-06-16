import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  currentLang: EventEmitter<string> = new EventEmitter();
  constructor(private translate: TranslateService) {}

  getDeviceLanguage() {
    const language = navigator.language;
    if (language) {
      const locale = language.slice(0, 2);
      return locale;
    }
    return null;
  }

  init() {
    this.translate.addLangs(['en', 'es']);
    const language = this.getDeviceLanguage();
    if (['en', 'es'].includes(language)) {
      this.translate.setDefaultLang(language);
    } else {
      this.translate.setDefaultLang('es');
    }
    this.currentLang.subscribe((lang) => {
      this.translate.use(lang);
    });
  }
}
