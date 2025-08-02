import { Component } from '@angular/core';
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public theme: ThemeService) {
  }
}
