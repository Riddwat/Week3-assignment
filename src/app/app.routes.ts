import { Routes } from '@angular/router';
import { LacesComponent } from './lacescomponent/lacescomponent';
import { ShoesAndBagsComponent } from './shoesandbagscomponent/shoesandbagscomponent';
import {LoginForm} from './login-form/login-form';

export const routes: Routes = [
  { path: 'laces', component: LacesComponent },
  { path: 'shoesandbags', component: ShoesAndBagsComponent },
  { path: 'login', component: LoginForm },
  { path: '', redirectTo: 'laces', pathMatch: 'full' }
];