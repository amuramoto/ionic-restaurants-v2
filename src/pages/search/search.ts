import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { RestaurantService } from '../../providers/restaurant-service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

  restaurants: Array<Object>;
  searchTerm: string;

  constructor(public navCtrl: NavController, 
              public restaurantService: RestaurantService,
              public navParams: NavParams) {
    
  }


  ionViewWillEnter() {    
    this.searchTerm = this.restaurantService.getSearchTerm();
    this.getRestaurants();
  }

  ionViewDidEnter() {
    console.log(this.navParams.data);
  }

  getRestaurants() {
    this.restaurantService.getRestaurants(this.searchTerm)
      .subscribe(res => this.restaurants = res);
  }

}
