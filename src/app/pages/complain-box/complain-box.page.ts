import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-complain-box',
  templateUrl: './complain-box.page.html',
  styleUrls: ['./complain-box.page.scss'],
})
export class ComplainBoxPage implements OnInit {

  private complain: FormGroup;
  Data: any = [];
  constructor(private formBuilder: FormBuilder) {
    this.complain = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', Validators.required],
      MobileNo: ['', Validators.required],
      Date: ['', Validators.required],
      Message: ['', Validators.required]
    });
  }
  ngOnInit() {
    
  
  }
  logForm() {
    console.log(this.complain.value);
  }
}
