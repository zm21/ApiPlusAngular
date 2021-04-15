import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
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

  submitLogin(){
    if(!this.model.isValid()){
      this.notifierService.notify("error", "Please, enter all fields!")
    }
    else{
      this.authService.login(this.model).subscribe(data=>{
        if(data.status == 200){
          this.notifierService.notify("success", "You have successfully logined!")
          this.router.navigate(['/home'])
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
