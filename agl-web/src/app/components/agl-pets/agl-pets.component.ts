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

  constructor(private petsService: PetsService) { }

  async ngOnInit() {
    try {
      this.catsByPersonGender = null;
      this.genders = [];

      this.catsByPersonGender = await this.petsService.GetCatsByPersonGender();

      this.genders.push((<any>Gender)[this.catsByPersonGender.petsByPersonGender[0].gender]);
      this.genders.push((<any>Gender)[this.catsByPersonGender.petsByPersonGender[1].gender]);
    }
    catch(e){
      alert(e);
    }
  }

}
