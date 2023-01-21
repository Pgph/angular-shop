import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BookComponent } from './books/book/book.component';
import { BooksModule } from "./books/books.module";
import { BooksService } from "./books/books.service";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports: [BrowserModule, FormsModule, BooksModule, AppRoutingModule],
    bootstrap: [AppComponent],

})

export class AppModule {}