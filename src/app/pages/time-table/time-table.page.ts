import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.page.html',
  styleUrls: ['./time-table.page.scss'],
})
export class TimeTablePage implements OnInit {
  Data: any = [];
  monday: any = [];
  tuesday: any = [];
  wednesday: any = [];
  thursday: any = [];
  friday: any = [];
  dataSource = new MatTableDataSource();
  constructor(private data: DataService, public dialog: MatDialog, public alertController: AlertController) { }

  ngOnInit() {
    this.data.getTimeTable().subscribe(data => {
       this.monday = data.Monday;
       this.tuesday = data.Tuesday;
       this.wednesday = data.Wednesday;
       this.thursday = data.Thursday;
       this.friday = data.Friday;
       console.log(this.monday );
      });
  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: `Time: ${data.time}`,
      subHeader: `Subject: ${data.Subject}`,
      message: `Professor ${data.Professor}`,

    });

    await alert.present();
  }

  openDialog = (data) => {
    let dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: { data }
    });
  }
}
