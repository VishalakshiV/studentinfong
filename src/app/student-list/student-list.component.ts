import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [HttpClient]
})
export class StudentListComponent implements OnInit {

  private _studentList: [{id: number, name: string, age: number, gender: string, class: number}];
  private _edit = false;
  private _summary = false;
  private _showStudent = false;
  private _student: any[];


    get studentList(): [{ id: number; name: string; age: number; gender: string; class: number }] {
        return this._studentList;
    }

    set studentList(value: [{ id: number; name: string; age: number; gender: string; class: number }]) {
        this._studentList = value;
    }

    get edit(): boolean {
        return this._edit;
    }

    set edit(value: boolean) {
        this._edit = value;
    }

    get summary(): boolean {
        return this._summary;
    }

    set summary(value: boolean) {
        this._summary = value;
    }

    get showStudent(): boolean {
        return this._showStudent;
    }

    set showStudent(value: boolean) {
        this._showStudent = value;
    }

    get student(): any[] {
        return this._student;
    }

    set student(value: any[]) {
        this._student = value;
    }

    constructor(private http: HttpClient) {
  }

  ngOnInit() {
      this._read().subscribe(data => {
          this._studentList = data;
      });
  }

  private _read(): Observable<any> {
      return this.http.get('./assets/studentData.json');
  }

  saveStudent(student: {id: number, name: string, age: number, gender: string, class: number}) {
     this._studentList.push(student);
  }

  updateStudent(student: {id: number, name: string, age: number, gender: string, class: number}) {
      this._studentList.forEach((obj, index) => {
         if (obj.id === student.id) {
             this._studentList[index] = student;
         }
      });
  }
}
