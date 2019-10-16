import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public _url: string = "/assets/Data/Data.json"
  public _timeTable = "/assets/Data/timeTable.json"
  constructor(public http: HttpClient, public db: AngularFirestore) { }

  getData() {
    return this.http.get(this._url);
  }
  getTimeTable() {
    return this.http.get(this._timeTable);
  }
  createComplain(value) {
    console.log(value);
    return this.db.collection('complain').add({
      name: value.Name,
      message: value.Message,
      Department: value.Department,
      Date_of_complain: Date.now(),
      Mobile_no: value.MobileNo,
      email: value.Email,
      location: value.location,
      approveByTeacher: false,
      approveByHOD: false
    });
  }
  complainList() {
    return this.db.collection('/complain').snapshotChanges();
  }
  userList() {
    return this.db.collection('/users').snapshotChanges();
  }
  updateComplain(userKey, value) {
    return this.db.collection('complain').doc(userKey).set(value);
  }

  onDelete(id: string) {
    if (confirm('Are You Sure You Want To Delete Record?')) {
      return this.db.doc('users/' + id).delete();
    }
  }
}
