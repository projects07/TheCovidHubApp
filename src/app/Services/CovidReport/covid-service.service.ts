import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor(private http: HttpClient) { }
  public getCovidData(){
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    headers.append('content-type', 'application/json');
    return this.http.get("https://corona.lmao.ninja/v2/countries", { headers: headers });
  }
  getHistoricalData(fromDate:string, toDate:string,Country:string){
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    headers.append('content-type', 'application/json');
    return this.http.get("https://api.covid19api.com/country/"+Country +"?from="+
    fromDate+"T00:00:00Z&to="+toDate+"T00:00:00Z", { headers: headers })
  }
}
