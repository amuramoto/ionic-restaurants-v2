import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { Details } from '../details/details';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  restaurants: Array<any>;
  searchTerms: Array<any>;

  constructor(public navCtrl: NavController, public restaurantService: RestaurantService) {}

  ionViewWillEnter() {
    this.restaurantService.getRestaurants()
      .subscribe(res => this.restaurants = res);
  }

  showDetails(details: Object) {
    this.navCtrl.push(Details, details);
  }

}
