import { Component, input } from '@angular/core';
import { ItineraryActivity } from '../../../models/itinerary.model';

@Component({
  selector: 'app-activity-item',
  imports: [],
  templateUrl: './activity-item.html',
  styleUrl: './activity-item.css',
})
export class ActivityItemComponent {
  readonly activity = input.required<ItineraryActivity>();
}
