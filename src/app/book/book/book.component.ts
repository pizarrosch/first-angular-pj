import {Component} from '@angular/core';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrl: './book.component.css',
    standalone: false
})
export class BookComponent {
    title = 'Book component works!';
}
