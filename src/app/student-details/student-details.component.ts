import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {

  registerForm: FormGroup;
  @Input() students: {id: number, name: string, age: number, gender: string, class: number};
  @Output()emitPass: EventEmitter<{id: number, name: string, age: number, gender: string, class: number}> =
      new EventEmitter<{id: number, name: string, age: number, gender: string, class: number}>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          id: ['', Validators.required],
          name: ['', Validators.required],
          age: ['', Validators.required],
          gender: ['', Validators.required],
          class: ['', Validators.required],
      });
  }

  private save() {
    this.students = {
          id: this.registerForm.controls.id.value ? this.registerForm.controls.id.value : this.students.id,
          name: this.registerForm.controls.name.value ? this.registerForm.controls.name.value : this.students.name,
          age: this.registerForm.controls.age.value ? this.registerForm.controls.age.value : this.students.age,
          gender: this.registerForm.controls.gender.value ? this.registerForm.controls.gender.value : this.students.gender,
          class: this.registerForm.controls.class.value ?  this.registerForm.controls.class.value : this.students.class
      };
    this.emitPass.emit(this.students);
  }

  private reset() {
      if (this.students) {
           this.registerForm.reset(this.students);
      } else {
          this.registerForm.reset();
      }

  }
}
