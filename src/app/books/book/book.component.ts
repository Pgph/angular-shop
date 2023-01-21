import { Component, Input } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book; 

  isInCart: boolean = false;

  constructor(private cartService: CartService) { }

addToCart() {
  this.isInCart = !this.isInCart;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = !this.isInCart;
    this.cartService.remove(this.book);
  }

}
