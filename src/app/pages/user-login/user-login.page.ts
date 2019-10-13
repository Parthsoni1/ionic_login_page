import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NewStudentService } from 'src/app/services/new-student.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  public loginForm: FormGroup;
  User = [];
  constructor(public formBuilder: FormBuilder, public student: NewStudentService, public userLogin: LoginService, public router: Router ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  ngOnInit() {
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
      console.log(this.User);
    })
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
}
