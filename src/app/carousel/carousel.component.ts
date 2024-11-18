import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Get all carousel items
    const items = document.querySelectorAll('.carousel-item');

    // Generate a random index for the starting slide
    const randomIndex = Math.floor(Math.random() * items.length);

    // Set the random slide as active
    items[randomIndex].classList.add('active');
  }
}
