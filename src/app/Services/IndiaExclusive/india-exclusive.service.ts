import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndiaExclusiveService {

  constructor(private http:HttpClient) { }

  fetchData():Observable<any> {
    return this.http.get<any>("https://api.covid19india.org/v2/state_district_wise.json");
  }
}
