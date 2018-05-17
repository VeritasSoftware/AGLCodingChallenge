import { Component, OnInit } from '@angular/core';

import { PetsByPersonGenderCollection, Gender } from '../../models/models';
import { PetsService } from '../../services/pets-service/pets-service';

@Component({
  selector: 'app-agl-pets',
  templateUrl: './agl-pets.component.html',
  styleUrls: ['./agl-pets.component.scss'],
  providers: [ PetsService ]
})
export class AglPetsComponent implements OnInit {

  catsByPersonGender: PetsByPersonGenderCollection;
  genders: Gender[];

  /******************************************/
  /* Constructor                            */
  /* petsService: The injected Pets Service */
  /******************************************/
  constructor(private petsService: PetsService) { }

  async ngOnInit() {
    try {
      this.catsByPersonGender = null;
      this.genders = [];

      //Async call to API using injected Pets Service
      this.catsByPersonGender = await this.petsService.GetCatsByPersonGender();

      this.catsByPersonGender.petsByPersonGender.forEach(x => this.genders.push((<any>Gender)[x.gender]));      
    }
    catch(e){
      alert(e);
    }
  }

}
