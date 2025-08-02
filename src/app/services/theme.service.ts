import {Injectable} from '@angular/core';
import {signal} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Inject} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    isDarkTheme = signal(false);

    constructor(@Inject(DOCUMENT) private document: Document) {
        // Initialize theme based on the current signal value
        this.updateBodyClass(this.isDarkTheme());
    }

    toggleTheme() {
        this.isDarkTheme.update(v => !v);
        this.updateBodyClass(this.isDarkTheme());
    }

    private updateBodyClass(isDark: boolean) {
        if (isDark) {
            this.document.body.classList.add('dark');
            this.document.body.classList.remove('light');
        } else {
            this.document.body.classList.add('light');
            this.document.body.classList.remove('dark');
        }
    }
}
