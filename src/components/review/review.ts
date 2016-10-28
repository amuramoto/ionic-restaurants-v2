import { Component, Input } from '@angular/core';
import { RestaurantService } from '../../providers/restaurant-service';

@Component({
  selector: 'review',
  templateUrl: 'review.html'
})
export class Review {

  @Input() reviewDetails: any;

  constructor(public restaurantService:RestaurantService) {
    
  }

}
