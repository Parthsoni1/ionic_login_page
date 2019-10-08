import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url:string = "/assets/Data/Data.json" 
  private _timeTable = "/assets/Data/timeTable.json"
  constructor(private http:HttpClient) { }
  
  getData() {
    return this.http.get(this._url);
  }
  getTimeTable() {
    return this.http.get(this._timeTable);
  }
}
