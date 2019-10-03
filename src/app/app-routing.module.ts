import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkedInSignUpComponent } from './home/linked-in-sign-up/linked-in-sign-up.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ServerService } from './server.service';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch:'full' },
  { path:'linkedin-signup', component: LinkedInSignUpComponent, pathMatch:'full' },
  { path:'signup', component: SignUpComponent, pathMatch:'full' },
  { path:'welcome', component: WelcomeComponent, canActivate:[ServerService] },
  {path: '*', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
