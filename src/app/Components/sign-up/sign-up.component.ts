import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/AuthService/authentication-service.service';
import {SignUp} from './SignUpModel'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth:AuthenticationServiceService,private router:Router) { }
  newUser:SignUp = {
    id:null,Username:'',Password:'',Email:'',PhoneNumber:0
  }
  signupform = new FormGroup({
    Username: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    PhoneNumber: new FormControl('',Validators.required)
  })
  ngOnInit(): void {

  }
  signUp(){
    this.newUser.Username = this.signupform.get('Username').value;
    this.newUser.Email = this.signupform.get('Email').value;
    this.newUser.Password = this.signupform.get('Password').value;
    this.newUser.PhoneNumber = this.signupform.get('PhoneNumber').value;
    this.auth.AddNewUser(this.newUser).subscribe(result=>{alert("Account Successfully Created")})
    this.router.navigate(["/login"])
    //console.log(this.signupform);
    
  }

}
