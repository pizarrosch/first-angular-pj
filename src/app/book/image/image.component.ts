import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: `./image.component.html`,
  styleUrl: './image.component.css'
})
export class ImageComponent {}
