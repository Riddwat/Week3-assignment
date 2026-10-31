import { Component } from '@angular/core';
import { Selectcolorcomponent } from '../selectcolorcomponent/selectcolorcomponent';

@Component({
  selector: 'app-shoesandbagscomponent',
  standalone: true,
  imports: [Selectcolorcomponent],
  templateUrl: './shoesandbagscomponent.html',
  styleUrl: './shoesandbagscomponent.css'
})
export class ShoesAndBagsComponent {

onColor(color: string) {
  console.log('Picked:', color);
}


}