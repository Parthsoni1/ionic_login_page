import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public _url:string = "/assets/Data/Data.json" 
  public _timeTable = "/assets/Data/timeTable.json"
  constructor(public http:HttpClient) { }
  
  getData() {
    return this.http.get(this._url);
  }
  getTimeTable() {
    return this.http.get(this._timeTable);
  }
}
