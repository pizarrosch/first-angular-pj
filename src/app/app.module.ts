import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book/book.component';
import {HeaderComponent} from "./shared/header/header.component";
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {appRoutes} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent, BookComponent
    ],
    imports: [
        BrowserModule,
        HeaderComponent,
        RouterOutlet,
        RouterLink
    ],
    providers: [provideRouter(appRoutes)],
    bootstrap: [AppComponent]
})
export class AppModule {
}