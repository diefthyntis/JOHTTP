import { Component, Input } from '@angular/core';
import { Country } from '../classes/country.class';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {

  @Input() inputCountry!:Country;

  constructor(private instanceRouteur:Router) {
      }
      onClickView() {
          this.instanceRouteur.navigateByUrl('rlActivity/'+this.inputCountry.id);
        }
}
