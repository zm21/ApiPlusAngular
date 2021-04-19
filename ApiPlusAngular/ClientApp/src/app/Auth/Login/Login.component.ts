import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import jwtDecode from 'jwt-decode';
import { LoginModel } from 'src/app/Models/login.model';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private notifierService: NotifierService,
    private router: Router,
    private authService: AuthService) { }

  model = new LoginModel();
  tokeData: any;

  submitLogin(){
    if(!this.model.isValid()){
      this.notifierService.notify("error", "Please, enter all fields!")
    }
    else if(!this.model.isEmail()){
      this.notifierService.notify("error", "Please, enter correct email!")
    }
    else{
      this.authService.login(this.model).subscribe(data=>{
        if(data.code == 200){
          this.notifierService.notify("success", "You have successfully logined!")
          console.log(data.token)
          localStorage.setItem("token", data.token)
          this.tokeData = jwtDecode(data.token);
          console.log(this.tokeData);
          
          this.authService.authEventsEmit();
          if(this.tokeData.roles == "Admin"){
            this.router.navigate(['/admin-panel'])
          }
          else if(this.tokeData.roles == "User"){
            this.router.navigate(['/user-profile'])
          }

        }
        else{
          data.errors.forEach(e => {
            this.notifierService.notify("error", e)
          });
        }
      });
    }
    console.log(this.model)
  }

  ngOnInit() {
  }

}
