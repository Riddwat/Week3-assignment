import { Component } from '@angular/core';
import { Selectcolorcomponent } from '../selectcolorcomponent/selectcolorcomponent';

@Component({
  selector: 'app-lacescomponent',
  standalone: true,
  imports: [Selectcolorcomponent],
  templateUrl: './lacescomponent.html',
  styleUrl: './lacescomponent.css'
})
export class LacesComponent {

onColor(color: string) {
  console.log('Picked:', color);
}

}