import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 250,
        name: 'Pizza',
        favoriate: false,
        stars: 4.2,
        tag: ['fast food', 'italy', 'pizza', 'lunch'],
        imageUrl: '/assets/images/img1.jpg',
        cookTime: '40-50',
        origins: ['Italy', 'Belgium', 'Europe']
      },
      {
        id: 2,
        price: 250,
        name: 'Burgure',
        favoriate: true,
        stars: 3.0,
        tag: ['fast food', 'pizza'],
        imageUrl: 'assets/images/img2.jpg',
        cookTime: '20-40',
        origins: ['italy', 'Amerian']
      },
      {
        id: 3,
        price: 250,
        name: 'Purple Cup-Cake',
        favoriate: false,
        stars: 5,
        tag: ['fast food', 'cake', 'breakfast'],
        imageUrl: 'assets/images/img3.jpg',
        cookTime: '40-100',
        origins: ['India', 'Pakistan']
      },
      {
        id: 4,
        price: 250,
        name: 'Pasta',
        favoriate: true,
        stars: 2.2,
        tag: ['fast food', 'italy', 'breakfast'],
        imageUrl: 'assets/images/img4.jpg',
        cookTime: '10-20',
        origins: ['italy', 'Poland']
      },
      {
        id: 5,
        price: 250,
        name: 'Strawberry Cup-Cake',
        favoriate: true,
        stars: 3.2,
        tag: ['fast food', 'strawberry', 'cake'],
        imageUrl: 'assets/images/img5.jpg',
        cookTime: '40-100',
        origins: ['Europe']
      },
      {
        id: 6,
        price: 250,
        name: 'Fruit Juice',
        favoriate: false,
        stars: 4.0,
        tag: ['drinks', 'juice'],
        imageUrl: 'assets/images/img6.jpg',
        cookTime: '10-20',
        origins: ['India', 'Mayanmar']
      },
      {
        id: 7,
        price: 250,
        name: 'Pan-Cake',
        favoriate: true,
        stars: 3.3,
        tag: ['fast food', 'indian', 'lunch'],
        imageUrl: 'assets/images/img7.jpg',
        cookTime: '60-100',
        origins: ['Poland', 'France']
      }
    ]
  }

  getAllFoodByTag(stag: string): Foods[] {
    return stag == 'All' ? this.getAll() : this.getAll().filter(food => food.tag?.includes(stag.toLowerCase()))
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 7 },
      { name: 'Pizza', count: 2 },
      { name: 'Cake', count: 2 },
      { name: 'Juice', count: 1 },
      { name: 'Lunch', count: 2 },
      { name: 'Strawberry', count: 1 },
      { name: 'Indian', count: 1 },
      { name: 'Breakfast', count: 2 },
      { name: 'Drinks', count: 1 },
    ]
  }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }
}


