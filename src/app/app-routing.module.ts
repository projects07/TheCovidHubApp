import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { IndiaExclusiveComponent } from './Components/india-exclusive/india-exclusive.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component: AuthenticateComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'the-i-bot',component:ChatbotComponent},
  {path:'signup',component:SignUpComponent},
  {path:'India',component:IndiaExclusiveComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
