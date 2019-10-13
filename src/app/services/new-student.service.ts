import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewStudentService {

  constructor(public http: HttpClient, public db: AngularFirestore) { }
  newStudent(students) {
    return this.http.post(`http://localhost:3001/collage/dept`, students);
  }
  createUser(value) {
    console.log(value);
    return this.db.collection('users').add({
      name: value.name,
      enroll_no: value.enroll_no,
      password: value.password,
      Designation: value.Designation,
      Semester: value.Semester,
      Date_of_birth: value.Date_of_birth,
      Mobile_no: value.Mobile_no,
      email: value.email,
     
    });
  }

}
