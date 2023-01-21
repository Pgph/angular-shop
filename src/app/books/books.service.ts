import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
        amount: 700,
      },
      {
        name: 'Pragmatic Programmer',
        author: 'Andrew Hunt',
        image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg',    
        amount: 800,
      },
      {
        name: 'The Art of Computer Programming',
        author: 'Donald John Fuller',
        image: 'https://media.libris.to/jacket/39374455_the-art-of-computer-programming-volumes-1-4b-boxed-set.jpg',
        amount: 1500,
      },
      {
        name: 'Introduction to algorithms',
        author: 't cormen',
        image: 'https://m.media-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg',
        amount: 1000,
      }
    ]
  }
}
