import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-book-details',
    standalone: true,
    imports: [],
    templateUrl: './book-details.component.html',
    styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
    title = this.route.snapshot.paramMap.get('title')!;

    constructor(private route: ActivatedRoute) {
    }
}
