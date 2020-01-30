import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public translate: TranslateService) {
    // configure language supported in application
    translate.addLangs(['fr', 'ar']);
    translate.setDefaultLang('fr');
  }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 3000);
  }

  // function for switch to another language
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
