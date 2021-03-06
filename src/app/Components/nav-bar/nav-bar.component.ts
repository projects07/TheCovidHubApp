import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/AuthService/authentication-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  profile: string;
  temp: string;
  symptoms: string;
  symptomCheck: boolean;
  covidAlreadyCame = "No";
  constructor(private auth:AuthenticationServiceService) { }
  uname:string;
  ngOnInit(): void {
    this.auth.getProfileObs().subscribe(profile => this.profile = profile);
    this.uname = sessionStorage.getItem('uname');
    // if(this.uname == null){
    // this.temp = prompt("What is your body temperature?");
    // this.symptomCheck=window.confirm("Do you have any Unusual Symptoms?")
    // if(this.symptomCheck){
    //   this.symptoms = prompt("What are the symptoms that you are currently having?");}
    // if(window.confirm("Have you already been affected by COVID19?"))
    //   this.covidAlreadyCame = "Yes"
    // }
  }

}
