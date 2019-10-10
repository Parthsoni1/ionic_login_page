import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewStudentService {

  constructor(private http: HttpClient) { }
  newStudent(students) {
    return this.http.post(`http://localhost:3001/collage/dept`, students);
  }
}
