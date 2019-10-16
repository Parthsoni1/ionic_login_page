import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
studentData: [];
dataSource = new MatTableDataSource();
  constructor() { }

  ngOnInit() {

  }

}
