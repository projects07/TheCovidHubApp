import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor(private http: HttpClient) { }
  public getCovidData(){
    return this.http.get("https://corona.lmao.ninja/v2/countries");
  }
  getHistoricalData(fromDate:string, toDate:string,Country:string){
    return this.http.get("https://api.covid19api.com/country/"+Country +"?from="+
    fromDate+"T00:00:00Z&to="+toDate+"T00:00:00Z")
  }
}
