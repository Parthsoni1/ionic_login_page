import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.page.html',
  styleUrls: ['./time-table.page.scss'],
})
export class TimeTablePage implements OnInit {
  Data:any = [];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getTimeTable().subscribe(data =>{ this.Data = data
      console.log(this.Data);
      });
  }

}
