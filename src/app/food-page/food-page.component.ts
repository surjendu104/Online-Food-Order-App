import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Foods
  constructor(private activatedRoute: ActivatedRoute, private foodService:FoodService){
    activatedRoute.params.subscribe((params) => {
      if(params['id']) {
        this.food = foodService.getFoodById(params['id'])
      }
    })
  }



}
