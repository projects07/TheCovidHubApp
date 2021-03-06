import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/AuthService/authentication-service.service';
import { SignUp } from '../sign-up/SignUpModel';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  constructor(private auth:AuthenticationServiceService,private router:Router) { }
  profile:string;
  ngOnInit(): void 
  {
    this.auth.getProfileObs().subscribe(profile => this.profile = profile);

  }
  temp:string;symptoms:string;loginConfirm:boolean;
  profileForm = new FormGroup({
    Email: new FormControl(''),
    password: new FormControl('')
  })
  login(){
    let email = this.profileForm.get('Email').value
    let password = this.profileForm.get('password').value
    this.auth.loginAuthenticate(email, password).subscribe((result: SignUp) => {
      if(result!=null || result !=undefined){
      
      Object.keys(result).forEach(key => {
        if((result[key]).Email == email) {
          sessionStorage.setItem('uname',(result[key]).Username);
        }
      });

      console.log(sessionStorage.getItem('uname'));
      this.loginConfirm = true;
      this.auth.setProfileObs("Yes");
      this.router.navigate(['/home']);
    }
    else{
      this.loginConfirm = false;
      console.log(this.loginConfirm);
      //alert("Please Enter Valid Credentials")
    }

    })
    
    console.log(email);
    
  }
  

}
