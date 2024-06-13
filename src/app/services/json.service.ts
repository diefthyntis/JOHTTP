import { Injectable } from "@angular/core";
import { Country } from "../classes/country.class";

@Injectable({
    providedIn:'root'

})

export class JsonService {
    url='http://localhost:3000/countries'
   
   
   
    
   async getAllData(): Promise<Country[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
   }

}



//    setArrayCountries():void {
//     //console.log ("JsonService,setArrayCountries 1")
//     //let returnedArray!:Country[];
//     this.getAllData().then((returnedArray:Country[]) => {
//         this.arrayCountries = returnedArray;
//       });
     
//    }

//    getArrayCountries(): Country[] {
//         return this.arrayCountries;
//    }

//    setArrayAllParticipations(): void {
//     let anyParticipation: Participation;
//     let anyCountry: Country;
//     for (anyCountry of this.arrayCountries) {
//        for (anyParticipation of anyCountry.arrayParticipations) {
//             this.arrayAllParticipations.push(anyParticipation);
//        }
//     }
//     }

//    getParticipationsByCountryId(pCountryId:number): Participation[] {
//     this.setArrayAllParticipations();
//     let anyParticipation:Participation;
//     let arraySomeParticipations!:Participation[];
//     let anyCountry:Country;

//     //console.log("Taille du tableau arrayCountries="+this.arrayCountries.length);
//     // console.log("Taille du tableau retourné="+returnedArray.length);
//    /*  for (anyParticipation of this.arrayAllParticipations) {
//         if ( anyParticipation.id == pCountryId ) {
//             arraySomeParticipations.push(anyParticipation);
//         }
//     } */
//     for (anyCountry of this.arrayCountries) {
//         for (anyParticipation of anyCountry.arrayParticipations) {
//             if ( anyParticipation.id == pCountryId ) {
//                 arraySomeParticipations.push(anyParticipation);
//             }
//         }
//     }
       
//     return arraySomeParticipations;
//    }
   
//    getCountryById(pCountryId:number):Country {
    
//     let anyCountry: Country;
//     let found: Boolean = false;
//     let returnedCountry!:Country;
//     for (anyCountry of this.arrayCountries) {
//         if (found == false) {
//             if (anyCountry.id = pCountryId) {
//                 returnedCountry = anyCountry
//                 found=true;
                
//             }
//         }
//     }
//     return returnedCountry;
    

    

