import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewStudentService {

  constructor(private http: HttpClient) { }
  newStudent(student) {
    return this.http.post(`localhost:3001/collage/dept`, student);
  }
}
