import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.page.html',
  styleUrls: ['./complain-list.page.scss'],
})
export class ComplainListPage implements OnInit {
  Complain = [];
  ComplainList = [];
  approveIdArry = [];
  displayedColumns: string[] = ['EmpName', 'RishabhId', 'DivName', 'icon'];
  dataSource: any = new MatTableDataSource();
  constructor(public service: DataService) { }

  ngOnInit() {
    this.complinList();
    console.log(this.Complain);
  }
  complinList() {
    this.service.complainList()
      .subscribe(result => {

        this.Complain = result.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as any;
        });
        this.Complain.forEach(e => {
          if (e.approveByHOD === false) {
            if (e.approveByTeacher === false) {

              this.dataSource = this.Complain;
              console.log('Complain', this.dataSource );
            }
          } else {
            console.log('Complain', this.dataSource );
            console.log('No Data Found');
          }
        });
        this.dataSource = this.Complain;
        return this.Complain;
      });

  }
  onChange = (value, isChecked) => {
    console.log(isChecked);
    console.log(value);
    if (isChecked) {
      this.approveIdArry.push(value.id);
      console.log(this.approveIdArry);

    } else {
      const index =  this.approveIdArry.indexOf(value.id);
      this.approveIdArry.splice(index, 1);
    }
  }
  submitApprove(value) {
    console.log(value);
    value.approveByTeacher = true;
    this.service.updateComplain(value.id, value)
    .then(
      res => {
        console.log(res);
      }
    );
  }
}
