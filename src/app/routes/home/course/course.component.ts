import { Component, OnInit,Input } from '@angular/core';
import { course } from 'src/app/model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
@Input('current') course:course;
  constructor() { }

  ngOnInit() {
  }

}
