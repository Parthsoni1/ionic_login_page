import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NewStudentService } from 'src/app/services/new-student.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  public teacherForm: FormGroup;
  public studentForm: FormGroup;
  // tslint:disable-next-line:ban-types
  show: Boolean = false;
  designation = true;
  number = Math.floor(Math.random() * 1000000000000);

  constructor(public formBuilder: FormBuilder, public student: NewStudentService) {
    this.teacherForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
      Date_of_birth: ['', Validators.required],
      Mobile_no: ['', Validators.required],
      Semester: ['', Validators.required],
      Designation: ['', Validators.required],
      pay: ['', Validators.required],
      subject: ['', Validators.required],
      section: ['', Validators.required]
    });
    this.studentForm = this.formBuilder.group({
      enroll_no: [this.number, Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      Date_of_birth: ['', Validators.required],
      Designation: ['Student', Validators.required],
      Mobile_no: ['', Validators.required],
      Semester: ['', Validators.required],

    });
  }

  ngOnInit() {

  }
  logForm() {

    // console.log(this.studentForm.value);
    // this.student.newStudent(this.studentForm.value)
    // .subscribe((res) => {
    //   console.log(res);
    // });
    this.student.createUser(this.studentForm.value)
    .then(
      res => {
        console.log(res);
      });
  }
  teacherform() {
    console.log(this.teacherForm.value);
    this.student.createFaculty(this.teacherForm.value)
    .then(
      res => {
        console.log(res);
      });
    // this.student.newStudent(this.teacherForm.value)
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
  isPassword() {
    this.show = !this.show;
  }
}
