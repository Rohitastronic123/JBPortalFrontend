import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router'; // Import Router for navigation
import { JobSearchPopupComponent } from '../job-search-popup/job-search-popup.component';

interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  internalLink?: boolean;  // Optional flag to check if link is internal
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

  constructor(private router: Router, private dialog: MatDialog) { } // Inject MatDialog

  ngOnInit() {
  }

  cards: Card[] = [
    {
      title: 'Build Your Resume',
      subtitle: 'Improve your skill',
      description: 'Best time to create future.',
      image: './assets/images/resume.jpg',
      link: '/app-resume',  // Internal link
      internalLink: true
    },
    {
      title: 'Job Search',
      subtitle: 'Find your future',
      description: 'Best place for job search.',
      image: './assets/images/naukri.jpg',
      link: '/app-job',  // External link
      internalLink: true
    },
    {
      title: 'Job Interview',
      subtitle: 'Check your skills',
      description: 'Check your mirror image.',
      image: './assets/images/interview.jpg',
      link: 'https://example.com/page3',  // External link
    }
  ];

  navigateToLink(card: Card): void {
    if (card.internalLink) {
      if (card.link === '/app-job') {
        // Open the job search popup dialog
        this.dialog.open(JobSearchPopupComponent, {
          width: '500px',
        });
      } else {
        // Handle other internal navigation here
        this.router.navigate([card.link]);
      }
    } else {
      window.open(card.link, '_blank');
    }
  }
}
