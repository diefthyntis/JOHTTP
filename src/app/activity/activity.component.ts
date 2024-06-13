import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';
import { Country } from '../classes/country.class';
import { ParticipationComponent } from '../participation/participation.component';
import { Participation } from '../classes/participation.class';
import { count, timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [ParticipationComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent implements OnInit {
arrayCountries:Country[]=[];
arrayParticipations:Participation[]=[];
countryId?:number;


constructor(private instanceJsonService:JsonService,private instanceActivatedRoute:ActivatedRoute) {
    
}

ngOnInit(): void { 
  this.instanceJsonService.getAllData().then((returnedArray:Country[]) => {
    this.arrayCountries = returnedArray;
  });

  this.countryId = this.instanceActivatedRoute.snapshot.params['id'];

  let elementCountry:Country;
  if (this.arrayCountries.length >= 1 ) {
      for (elementCountry of this.arrayCountries) {
        if (elementCountry.id == this.countryId) {
            this.arrayParticipations = elementCountry.arrayParticipations;
          } 
      }
    }
  }
  

  
}
