import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public LoginForm:FormGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  
  })
  constructor(private _loginService:LoginService, private _router:Router){}
  login(){
    console.log(this.LoginForm);
    this._loginService.login(this.LoginForm.value).subscribe(
      (data:any)=>{
        console.log(data)
        alert("login sucessfully!!")
        this._router.navigateByUrl('/dash-board');
        sessionStorage.setItem('token',data.token);
      },
      (error:any)=>{
        alert("invalid credintails");
      }
    )
  }
}
