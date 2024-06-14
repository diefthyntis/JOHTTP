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



    

    

