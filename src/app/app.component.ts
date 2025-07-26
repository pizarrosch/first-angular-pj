import {Component, NgModule} from '@angular/core';
import {BookComponent} from "./book/book/book.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})

export class AppComponent {
  title = 'My First Angular Project';
}