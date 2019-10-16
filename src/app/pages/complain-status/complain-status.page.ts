import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-complain-status',
  templateUrl: './complain-status.page.html',
  styleUrls: ['./complain-status.page.scss'],
})
export class ComplainStatusPage implements OnInit {
  Complain = [];
  ComplainList = [];
  displayedColumns: string[] = ['EmpName', 'RishabhId', 'DivName', 'Message', 'Status'];
  dataSource: any = new MatTableDataSource();
  constructor(public service: DataService, public loadingController: LoadingController) { }

  ngOnInit() {


    this.complinList();
  }

  async complinList() {

    const loading = await this.loadingController.create({
      message: 'Wait',

      duration: 1000
    });
    await loading.present();

    this.service.complainList()
      .subscribe(result => {

        this.Complain = result.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as any;
        });
        this.dataSource = this.Complain;
        console.log(this.Complain);
        return this.Complain;
      });

  }
}
