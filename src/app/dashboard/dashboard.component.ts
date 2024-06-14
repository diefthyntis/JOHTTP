import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';
import { Country } from '../classes/country.class';
import { CountryComponent } from '../country/country.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CountryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  arrayCountries:Country[]=[];
  
  constructor(private instanceJsonService: JsonService) {}

  ngOnInit(): void {
    this.instanceJsonService.getAllData().then((returnedArray:Country[]) => {
      this.arrayCountries = returnedArray;
    });
  }
   
}
