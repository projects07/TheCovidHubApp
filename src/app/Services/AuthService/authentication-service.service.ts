import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from 'src/app/Components/sign-up/SignUpModel';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  private profileObs$: BehaviorSubject<string> = new BehaviorSubject("No");

  constructor(private http:HttpClient) { }
  getProfileObs(): Observable<string> 
  {
    return this.profileObs$.asObservable();
  }
  setProfileObs(profile: string) 
  {
  this.profileObs$.next(profile);
  }
  loginAuthenticate(email:string,password:string){
    return this.http.get("http://localhost:3000/Users?Email="+email+"&Password="+password);
  }
  AddNewUser(signUp:SignUp){
    return this.http.post("http://localhost:3000/Users/",signUp,{headers:new HttpHeaders({'Content-Type':'application/json'})})
  }
}
