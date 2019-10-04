import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-complain-box',
  templateUrl: './complain-box.page.html',
  styleUrls: ['./complain-box.page.scss'],
})
export class ComplainBoxPage implements OnInit {

  private todo: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
