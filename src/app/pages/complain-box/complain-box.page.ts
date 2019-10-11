import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-complain-box',
  templateUrl: './complain-box.page.html',
  styleUrls: ['./complain-box.page.scss'],
})
export class ComplainBoxPage implements OnInit {

  public todo: FormGroup;
  Data: any = [];
  constructor(public formBuilder: FormBuilder, public data: DataService) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  ngOnInit() {
    this.data.getData().subscribe(data => { this.Data = data;
                                            console.log(this.Data);
    });
  }
  logForm() {
    console.log(this.todo.value);
  }
}
