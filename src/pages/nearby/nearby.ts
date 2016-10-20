import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
/*
  Generated class for the Nearby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class Nearby {

  restaurants: Array<any>;
  searchTerms: Array<any>;

  constructor(public navCtrl: NavController, public restaurantService: RestaurantService) {
    this.searchTerms = [
      {'term': 'Restaurants', 'icon': 'restaurant'},
      {'term': 'Bars', 'icon': 'beer'},
      {'term': 'Coffee & Tea', 'icon': 'cafe'}      
    ]
  }

  ionViewWillEnter() {
    this.restaurantService.getRestaurants()
      .subscribe(res => this.restaurants = res);
  }

  search(searchTerm?: string) {
    this.navCtrl.parent.select(1);
  }

}
