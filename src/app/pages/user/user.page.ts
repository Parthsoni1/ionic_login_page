import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/user/home',
      icon: 'home'
    },
    {
      title: 'Complain Box',
      url: '/user/complain',
      icon: 'list'
    },
    {
      title: 'Time Table',
      url: '/user/timetable',
      icon: 'list'
    },
    
  ];

  constructor(public menu: MenuController,
              public platform: Platform, public splashScreen: SplashScreen, public statusBar: StatusBar) {   this.initializeApp();
              }

  ngOnInit() {
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
