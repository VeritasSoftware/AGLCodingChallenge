import { PetsByPersonGenderCollection } from '../../models/models'

export interface IPetsService {
    GetCatsByPersonGender(): Promise<PetsByPersonGenderCollection>;
}