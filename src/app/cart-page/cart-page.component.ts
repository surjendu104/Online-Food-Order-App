import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItems } from '../shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  ngOnInit(): void {  }
  constructor(private cartService:CartService){}

  setCart() {
    this.cart = this.cartService.getCart()
  }

  removeFromCart(cartItem:CartItems) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart()
  }

  changeQuantity(cartItem:CartItems, quantityInString:string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
