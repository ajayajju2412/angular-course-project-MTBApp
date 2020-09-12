import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //new signup user
  signup = new User();

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  signupUser(){
    this.signup.userTypeId = 2; //admin
    //call auth service,pass new signup user
    this.authService.signup(this.signup).subscribe(result=>{
      //result=success->navigate to login
      console.log(result);
      //for navigation,we need to inject dependency of Router
      this.router.navigate(['/signin']);
    },err=>{
      //result=fail->display error
      console.log(err);
      alert(JSON.stringify(err));
    });
  }

}
