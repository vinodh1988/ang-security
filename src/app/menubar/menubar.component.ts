import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  visibility:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  showlogin():void{
    this.visibility=this.visibility?false:true;
  }

}
