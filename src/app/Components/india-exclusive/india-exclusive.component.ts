import { Component, OnInit } from '@angular/core';
import { IndiaExclusiveService } from 'src/app/Services/IndiaExclusive/india-exclusive.service';
import {IndianModel,districtData} from './IndianModel'
@Component({
  selector: 'app-india-exclusive',
  templateUrl: './india-exclusive.component.html',
  styleUrls: ['./india-exclusive.component.css']
})
export class IndiaExclusiveComponent implements OnInit {

  constructor(private IndiaService:IndiaExclusiveService) { }
  indianData = []
  indianSpecificData:IndianModel;
  ngOnInit(): void {
    this.fetchAllData();
  }
  fetchAllData(){
    this.IndiaService.fetchData().subscribe(result=>{
      let finalData = []
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        this.indianData.push(element);
      }
  })
  //console.log(this.indianData);
}
totalActiveCases:number;totalConfirmedCases:number
fetchSpecificData(){
  this.totalActiveCases = 0;this.totalConfirmedCases=0;
  let state = this.specificState;
  let index = this.indianData.findIndex(c=>c.state == state)
  this.indianSpecificData = this.indianData[index];
  this.indianSpecificData = this.indianSpecificData as IndianModel
  this.indianSpecificData.districtData.forEach(element => {
    this.totalActiveCases = this.totalActiveCases + element.active;
    this.totalConfirmedCases = this.totalConfirmedCases + element.confirmed;
  });
  console.log(this.indianSpecificData.districtData);
  
}
specificState:string;
states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
          "Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh",                "Maharashtra",
          "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim",
          "Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal",
          "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu",
          "Delhi","Lakshadweep","Puducherry"]
}
//console.log(result[2]);