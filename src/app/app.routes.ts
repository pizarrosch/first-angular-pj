import {Routes} from "@angular/router";
import {BookDetailsComponent} from "./book/book-details/book-details.component";
import {BookComponent} from "./book/book/book.component";

export const appRoutes: Routes = [
    {
        path: '',
        component: BookComponent
    },
    {
        path: 'details/:title',
        component: BookDetailsComponent
    }
];