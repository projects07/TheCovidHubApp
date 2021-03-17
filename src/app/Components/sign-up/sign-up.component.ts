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
  signupform: FormGroup;
  Username: FormControl;
  Email: FormControl;
  Password: FormControl;
  PhoneNumber: FormControl;

  constructor(private auth:AuthenticationServiceService,private router:Router) { }
  newUser:SignUp = {
    id:null,Username:'',Password:'',Email:'',PhoneNumber:0
  }

  ngOnInit(): void {

    this.Username = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.Email = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.Password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.PhoneNumber = new FormControl('', [Validators.required, Validators.minLength(10)]);

    this.signupform = new FormGroup({
      Username : this.Username,
      Email: this.Email,
      Password: this.Password,
      PhoneNumber: this.PhoneNumber
    })
  }
  
  signUp(){
    this.newUser.Username = this.signupform.get('Username').value;
    this.newUser.Email = this.signupform.get('Email').value;
    this.newUser.Password = this.signupform.get('Password').value;
    this.newUser.PhoneNumber = this.signupform.get('PhoneNumber').value;
    this.auth.AddNewUser(this.newUser).subscribe(result=>{alert("Account Successfully Created")})
    this.router.navigate(["login"])
    //console.log(this.signupform);
    
  }

}
