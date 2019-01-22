import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

interface Token{
  access_token:string;
  refresh_token:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
  constructor(private login:LoginService) { }

  ngOnInit() {
  }

  loginActivity(){
      let dataobj={username:this.username,password:this.password,grant_type:"password"};
      let data="username="+this.username+"&"+
      "password="+this.password+"&grant_type=password";
      this.login.logMethod(data,dataobj).subscribe(
        (data:Token)=>{
          console.log(data);
          localStorage.setItem('token',data.access_token);
        },
        ()=>{alert("failure")}
        
      )
  }


}
