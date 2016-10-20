import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { RestaurantService } from '../../providers/restaurant-service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

  restaurants: Array<Object>;
  searchTerm: string = 'Restaurants';

  constructor(public navCtrl: NavController, public restaurantService: RestaurantService) {
  
  }


  ionViewWillEnter() {
    this.restaurantService.getRestaurants()
      .subscribe(res => this.restaurants = res);
  }

}
