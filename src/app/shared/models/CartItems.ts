import { Foods } from "./food";

export class CartItems {
    food:Foods;
    constructor(food:Foods){
        this.food = food;
    }
    quantity:number = 1;
    get price():number {
        return this.food.price*this.quantity;
    }
}