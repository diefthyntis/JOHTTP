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
  this.instanceJsonService.getAllData().then((returnedArray:Country[]) => {
    this.arrayCountries = returnedArray;
    console.log ("constructor Nombre de pays"+this.arrayCountries.length);
  });
  

  this.countryId = this.instanceActivatedRoute.snapshot.params['id'];

  
  console.log ("constructor Nombre de pays"+this.arrayCountries.length);
  let elementCountry:Country;

 
 console.log ("this.countryId"+this.countryId);

  for (elementCountry of this.arrayCountries) {
    console.log ("elementCountry.countryId"+elementCountry.id);
       if (elementCountry.id == this.countryId) {
        console.log ("trouvé");
           this.arrayParticipations = elementCountry.arrayParticipations;
       } 
  }
}

ngOnInit(): void {

  this.instanceJsonService.getAllData().then((returnedArray:Country[]) => {
    this.arrayCountries = returnedArray;
    console.log ("ngOnInit Nombre de pays"+this.arrayCountries.length);
  });
  

  this.countryId = this.instanceActivatedRoute.snapshot.params['id'];

  
  console.log ("ngOnInit Nombre de pays"+this.arrayCountries.length);
  let elementCountry:Country;

 timer
 console.log ("this.countryId"+this.countryId);

  for (elementCountry of this.arrayCountries) {
    console.log ("elementCountry.countryId"+elementCountry.id);
       if (elementCountry.id == this.countryId) {
        console.log ("trouvé");
           this.arrayParticipations = elementCountry.arrayParticipations;
       } 
  }
       
}

}
