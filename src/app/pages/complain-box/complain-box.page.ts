import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-complain-box',
  templateUrl: './complain-box.page.html',
  styleUrls: ['./complain-box.page.scss'],
})
export class ComplainBoxPage implements OnInit {

  public complain: FormGroup;
  Data: any = [];
  DepartmentCat = ['Admin', 'Faculty', 'Technical', 'Account'];
  location = ['Mca Block-1', 'Mca Block-2', 'BE Block-1', 'BE Block-2', 'Account Dept', 'Canteen'];
  constructor(private formBuilder: FormBuilder,  public service: DataService) {
    this.complain = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Message: ['', Validators.required],
      Department:  ['', Validators.required],
      location: ['']
    });
  }
  ngOnInit() {

  }
  logForm() {
    console.log(this.complain.value);
    this.service.createComplain(this.complain.value)
    .then(
      res => {
        console.log(res);
      });
  }
}
