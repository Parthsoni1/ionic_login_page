import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NewStudentService } from 'src/app/services/new-student.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  private studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private student: NewStudentService) {

    this.studentForm = this.formBuilder.group({
      enroll_no: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      Date_of_birth: ['', Validators.required],
      Mobile_no: ['', Validators.required],
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
}
