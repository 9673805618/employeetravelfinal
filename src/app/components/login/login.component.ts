import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/domain/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login= new Login();
  userId : string = "";
  password : string ="";
  constructor( private loginService : LoginService,
    private router: Router)
   { }

  ngOnInit(): void {
  }
  verifyUser(){
    console.log("in verifyUser()");
    console.log(this.login);
    
    this.loginService.verifyUser(this.login).subscribe(
      data =>{
        this.login=data;
        console.log("in loginnnnnn compo");
        
          console.log(this.login);
          sessionStorage.setItem('login',JSON.stringify(this.login))
          if(this.login.designation === 'Sr.Developer'){
          this.router.navigate(['employee']);
          
        }
        else if(this.login.designation === 'Jr.Developer'){
          this.router.navigate(['employee']);
          }else if(this.login.designation === 'Team Lead'){
            this.router.navigate(['employee']);
          }else if(this.login.designation === 'Manager'){
            this.router.navigate(['projectmanagerpage']);
          }else if(this.login.designation === 'Travel Agent'){
            this.router.navigate(['travelagentpage']);
          }else if(this.login.designation ==='Director'){
            this.router.navigate(['directorpage']);
          }
        
      }
    );
    
    
  }

}
