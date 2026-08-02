import { Component, inject } from '@angular/core';
import { TripStore } from '../../../state/trip-store';

@Component({
  selector: 'app-progress-trail',
  imports: [],
  templateUrl: './progress-trail.html',
  styleUrl: './progress-trail.css',
})
export class ProgressTrailComponent {
  protected readonly store = inject(TripStore);
}
