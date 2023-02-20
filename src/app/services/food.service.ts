import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/model/Food';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(){}

  getAll():Food[]{
    return sample_foods
  }
  getAllFoodbySearchTerm(searchTerm : string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getFoodbyId(id:string){
 return this.getAll().find(food=>food.id==id)!;

  }
}
