import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  title = 'Demo';
  contacts: [];
  opened: false;
  button: ['Login', 'Regestration', 'Hero'];
  firstName: string;
  user$: any;

  constructor( public servcie: LoginService) { }

  ngOnInit() {
    this.user$ = this.servcie.user$;
    console.log('user$', this.servcie.user$);
  }

}
