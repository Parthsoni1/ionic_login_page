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

  designation = true;

  constructor(public formBuilder: FormBuilder, public student: NewStudentService) {

    this.teacherForm = this.formBuilder.group({
      enroll_no: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      Date_of_birth: ['', Validators.required],
      Mobile_no: ['', Validators.required],
      Semester: ['', Validators.required],
      Designation: ['', Validators.required],
      pay: ['', Validators.required],
      subject: ['', Validators.required],
      section: ['', Validators.required]
    });
    this.studentForm = this.formBuilder.group({
      enroll_no: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      Date_of_birth: ['', Validators.required],
      Mobile_no: ['', Validators.required],
      Semester: ['', Validators.required],
      Designation: ['', Validators.required]
    });



  }

  ngOnInit() {

  }
  logForm() {

    console.log(this.studentForm.value);
    this.student.newStudent(this.studentForm.value)
    .subscribe((res) => {
      console.log(res);
    });
  }
  teacherform() {
    console.log(this.teacherForm.value);
    this.student.newStudent(this.teacherForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
