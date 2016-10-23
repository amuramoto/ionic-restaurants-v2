import { Component, Input } from '@angular/core';
import { RestaurantService } from '../../providers/restaurant-service';
/*
  Generated class for the Review component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'review',
  templateUrl: 'review.html'
})
export class Review {

  @Input() reviewDetails: Object;

  constructor(public restaurantService:RestaurantService) {
    
  }

}
