import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table'
import { ChartsModule } from 'ng2-charts';
import { IndiaExclusiveComponent } from './Components/india-exclusive/india-exclusive.component';
import { DataTablesModule } from "angular-datatables";
@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    ChatbotComponent,
    SignUpComponent,
    IndiaExclusiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,ChartsModule,DataTablesModule,MatProgressSpinnerModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
