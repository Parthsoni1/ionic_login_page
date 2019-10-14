import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  designation: string;


  public department = [

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
    {
      title: 'Attndence',
      url: '/user/attndence',
      icon: 'list'
    },
    {
      title: 'Complain List' ,
      url: '/user/complainList',
      icon: 'list'
    }
  ];
  public teacher = [

    {
      title: 'Complain Box',
      url: '/user/complain',
      icon: 'list'
    },
    {
      title: 'Time Table',
      url: '/user/timetable',
      icon: 'list'
    }
  ];


  constructor(public menu: MenuController, public router: Router,
              public platform: Platform, public splashScreen: SplashScreen, public statusBar: StatusBar) {   this.initializeApp();
              }

  ngOnInit() {
    this.designation = localStorage.getItem('designation');
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
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
