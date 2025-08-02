import {Component} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-button',
    imports: [
        NgIf
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css'
})
export class ButtonComponent {
    constructor(public theme: ThemeService) {
    }

    switchToNextTheme = () => {
        this.theme.toggleTheme();
    }
}
