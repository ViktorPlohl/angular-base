import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss'
})
export class WeddingComponent {

}
