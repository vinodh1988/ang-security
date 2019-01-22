import { Component, OnInit } from '@angular/core';
import { course } from 'src/app/model/course';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
courselist:course[];
coursetype:string="All Courses";
columnDefs = [
  {headerName: 'Module Name', field: 'modulename' ,filter: "agTextColumnFilter"},
  {headerName: 'Description', field: 'description' },
  {headerName: 'Price', field: 'price'},
  {headerName: 'Duration', field: 'duration'}
];
  constructor(private cs:CourseService) {
       this.cs.getCourses().subscribe(
         (data:course[])=>{this.courselist=data},
         ()=>{this.courselist=[]}
       );
   }

  ngOnInit() {
  }

}
