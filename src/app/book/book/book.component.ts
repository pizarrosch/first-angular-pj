import {Component} from '@angular/core';
import {Book} from "./book";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrl: './book.component.css',
    standalone: false
})
export class BookComponent {
    books: Book[] = [
        {
            author: 'Paula Hawkins',
            title: 'Girl on The Train',
            price: 19.99,
            currency: '$',
            imgSrc: '../../../assets/girl_on_the_train.jpg',
            alt: 'Girl On The Train'
        },
        {
            author: 'Suzanne Collins',
            title: 'Catching Fire',
            price: 12.47,
            currency: '$',
            imgSrc: '../../../assets/catching_fire.jpg',
            alt: 'Catching Fire'
        },
        {
            author: 'George R. R. Martin',
            title: 'Game of Thrones',
            price: 31.34,
            currency: '$',
            imgSrc: '../../../assets/GoT.jpg',
            alt: 'Game of Thrones'
        },
    ];
}
