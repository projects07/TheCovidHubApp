import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { CovidServiceService } from 'src/app/Services/CovidReport/covid-service.service';
import { CountryReports } from './CountryReports';
import { CountryReports2} from './CountryReport2';
import { DataTablesModule } from "angular-datatables";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean; };
  barChartLabels: string[];
  barChartType: string;
  barChartLegend: boolean;
  barChartData: { data: (string | number)[]; label: string; backgroundColor:string; }[];
  barChartOptions2: { scaleShowVerticalLines: boolean; responsive: boolean; };
  barChartLabels2: string[];
  barChartType2: string;
  barChartLegend2: boolean;
  barChartData2: { data: (string | number)[]; label: string; backgroundColor:string; }[];
  lineChartOptions: { scaleShowVerticalLines: boolean; responsive: boolean; };
  lineChartLabels: string[];
  lineChartType: string;
  lineChartLegend: boolean;
  lineChartData: { data: (string | number)[]; label: string; backgroundColor:string; }[];line
  Dates: string[];
  constructor(private covidService: CovidServiceService) { }
  theCovidData:CountryReports[];
  theHistoricalCovidData=[];
  displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  sepcificCountry:string;
  specificCountryData:CountryReports =null;
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.fetchAllData();
  }
  fetchAllData(){
    this.covidService.getCovidData().subscribe(result =>this.theCovidData = result as CountryReports[])
  }
  fetchHistoricalData(){
    let HistoryData = []
    this.Dates = this.Last7Days();
    this.covidService.getHistoricalData(this.Dates[6],this.Dates[0],this.sepcificCountry).subscribe(result =>{
      HistoryData.push(result[0].Confirmed);
      HistoryData.push(result[1].Confirmed);
      HistoryData.push(result[2].Confirmed);
      HistoryData.push(result[3].Confirmed);
      HistoryData.push(result[4].Confirmed);
      HistoryData.push(result[5].Confirmed);
      
    });
    this.theHistoricalCovidData = HistoryData;
    console.log(this.theHistoricalCovidData);
    
    
  }
  getInsightsForCard(){
    let specificCountryData = this.sepcificCountry;
    let index = this.theCovidData.findIndex(c => c.country == specificCountryData);
    this.specificCountryData = this.theCovidData[index];
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartLabels = ['Total Cases', 'Recovered', 'Deaths', 'Active', 'Critical'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      {data: [this.specificCountryData.cases,this.specificCountryData.recovered,
              this.specificCountryData.deaths, this.specificCountryData.active,this.specificCountryData.critical],
              label: 'The Vital Insights',backgroundColor:"#0C5FA4"}
    ];
    
    this.barChartLabels2 = ['Cases Per Million', 'Deaths Per Million', 'Tests Per Million'];
    this.barChartType2 = 'bar';
    this.barChartLegend2 = true;
    this.barChartData2 = [
      {data: [this.specificCountryData.casesPerOneMillion,this.specificCountryData.deathsPerOneMillion,
              this.specificCountryData.testsPerOneMillion],
              label: 'The One Million Threshold',backgroundColor:"#00AC69"}
    ];
    this.fetchHistoricalData();
    this.lineChartLabels = this.Dates.reverse();
    this.lineChartType = 'line';
    this.lineChartLegend = true;
    this.lineChartData = [
      {data: this.theHistoricalCovidData,
              label: 'The Historical Insights',backgroundColor:"#0C5FA4"}
    ];

  }
  formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }
 Last7Days () {
  let result = [];
  for (var i=0; i<7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push( this.formatDate(d) )
  }

  return(result);
}

  
  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];
}
