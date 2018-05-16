import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { IPetsService } from './ipets-service';
import { PetsByPersonGenderCollection, PetType } from '../../models/models';

@Injectable()
export class PetsService implements IPetsService {
    private apiBaseUrl:string = "http://localhost:64875/api/Pets/";

    /*********************************/
    /* Constructor                   */
    /* http: The injected HttpClient */
    /*********************************/
    constructor(private http: HttpClient){

    }

    /*************************************/
    /* Get the company hierarchy         */
    /* Make async http call to API       */
    /* Pass hierarchy string to delegate */
    /*************************************/
    private async GetPetsByPersonGender(petType: PetType): Promise<PetsByPersonGenderCollection> {
        var url = this.apiBaseUrl + "petsbypersongender?petType=" + petType.toString();

        //Async http call to API
        //The response is transformed into a string for display
        //The hierarchy string is passed to the delegate
        //If error, it is also passed to delegate
        return await this.http.get<PetsByPersonGenderCollection>(url)
                              .toPromise();                         
    }  

    async GetCatsByPersonGender(): Promise<PetsByPersonGenderCollection> {
        return await this.GetPetsByPersonGender(PetType.Cat);
    }
}