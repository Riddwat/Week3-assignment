import { Component } from '@angular/core';
import { LacesComponent } from './lacescomponent/lacescomponent';
import { ShoesAndBagsComponent } from './shoesandbagscomponent/shoesandbagscomponent';
import { Footer } from './footer/footer';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LacesComponent,
    ShoesAndBagsComponent,
    Footer,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}