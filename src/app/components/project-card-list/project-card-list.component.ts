import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-card-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './project-card-list.component.html',
  styleUrl: './project-card-list.component.scss'
})
export class ProjectCardListComponent {
  title = input<string>();

  @ViewChild('carousel') carousel!: ElementRef;

  @ViewChild('card') card!: ElementRef;

  cardWidth: number = 0;

  ngAfterViewInit(): void {
    this.cardWidth = this.card.nativeElement.offsetWidth;
  }

  scrollLeft(): void {
    this.carousel.nativeElement.scrollBy({ left: -this.cardWidth, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.carousel.nativeElement.scrollBy({ left: this.cardWidth, behavior: 'smooth' });
  }
}
