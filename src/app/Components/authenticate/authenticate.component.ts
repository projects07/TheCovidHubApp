import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/AuthService/authentication-service.service';
import { SignUp } from '../sign-up/SignUpModel';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  profileForm: FormGroup;
  Email: FormControl;
  password: FormControl;

  constructor(private auth:AuthenticationServiceService,private router:Router) { }
  profile:string;
  ngOnInit(): void 
  {
    this.auth.getProfileObs().subscribe(profile => this.profile = profile);

    this.Email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)])
    this.password = new FormControl('', Validators.required)

    this.profileForm = new FormGroup({
      Email: this.Email,
      password: this.password
    })
  }
  temp:string;symptoms:string;loginConfirm:boolean;
  
  login(){
    let email = this.profileForm.get('Email').value
    let password = this.profileForm.get('password').value
    this.auth.loginAuthenticate(email, password).subscribe((result: SignUp) => {

      if(Object.keys(result).length != 0){
      
      Object.keys(result).forEach(key => {
        if((result[key]).Email == email && result[key].Password == password) {
          sessionStorage.setItem('uname',(result[key]).Username);
          this.loginConfirm = true;
          this.auth.setProfileObs("Yes");
          this.router.navigate(['home']);
        }
      });
      this.loginConfirm = false;
    }
    else{
      this.loginConfirm = false;
    }

    })
    
  }
  

}
