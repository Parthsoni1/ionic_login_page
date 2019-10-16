import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NewStudentService } from 'src/app/services/new-student.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  public loginForm: FormGroup;
  User = [];
  // tslint:disable-next-line:ban-types
  show: Boolean = false;
  constructor(public formBuilder: FormBuilder,public toastController: ToastController,
     public student: NewStudentService, public userLogin: LoginService, public router: Router ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  ngOnInit() {
  }
  isPassword() {
    this.show = !this.show;
  }
  login() {
    console.log(this.loginForm.value);
    this.userLogin.searchUsers(this.loginForm.value)
    .subscribe(result => {
      this.User = result.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
      });

      if (this.User.length === 0) {
        alert('invalid username');
    } else {
        if (this.User[0].password !== this.loginForm.value.password) {
          alert('invalid password');
    } else {
       this.presentToastWithOptions();
       localStorage.setItem('designation',this.User[0].Designation);
       localStorage.setItem('email', this.User[0].email);
       this.router.navigate(['user']);
    }
}

      console.log(this.User[0].password);
    });
    // this.userLogin.authLogin(this.loginForm.value)
    // .subscribe((res: any) => {
    //  console.log(res);
    //  const token = res.token;
    //  localStorage.setItem('designation', res.user[0].Designation);
    //  localStorage.setItem('token', token);
    //  if (token) {
    //   this.router.navigate(['user']);
    //  }
    // });
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: '',
      message: 'Succesfully login',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'contact',
          text: 'Mylogin',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
