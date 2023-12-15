import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
];
