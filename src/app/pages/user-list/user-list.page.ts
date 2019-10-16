import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  usersList = [];
  displayedColumns: string[] = ['Name', 'Email', 'Designation', 'Mobile_no', 'section', 'icon'];
  dataSource: any = new MatTableDataSource();
  constructor(public service: DataService,  public loadingController: LoadingController) { }

  ngOnInit() {
    this.userList();

  }


  async userList() {
    const loading = await this.loadingController.create({
      message: 'Wait',

      duration: 1000
    });
    await loading.present();

    this.service.userList()
      .subscribe(result => {
        this.usersList = result.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as any;
        });
        this.dataSource = this.usersList;
        console.log(this.dataSource);
        return this.usersList;
      });
  }
  delete( id) {
    console.log(id);
    this.service.onDelete(id)
    .then(result => {
      console.log(result);
    });
  }
}
