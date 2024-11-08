import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-jbcard',
  templateUrl: './jbcard.component.html',
  styleUrls: ['./jbcard.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]

})
export class JBCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards: Card[] = [
    {
      title: 'Build Your Resume',
      subtitle: 'Improve your skill',
      description: 'Best time to create future.',
      image: './assets/images/resume.jpg',
      link: '/app-resume' 
    },
    {
      title: 'Job Search',
      subtitle: 'Find your future',
      description: 'Best place for job search.',
      image: './assets/images/naukri.jpg',
      link: 'https://example.com/page2'
    },
    {
      title: 'Job Interview',
      subtitle: 'Check your skills',
      description: 'Check your mirror image.',
      image: './assets/images/interview.jpg',
      link: 'https://example.com/page3'
    }
  ];

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
