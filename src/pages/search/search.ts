import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { Keyboard } from 'ionic-native';
import { Details } from '../details/details';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

  restaurants: Array<Object>;
  searchTerm: string;

  constructor(public navCtrl: NavController, 
              public restaurantService: RestaurantService) {
    
  }


  ionViewWillEnter() {    
    this.searchTerm = this.restaurantService.getSearchTerm();
    this.getRestaurants();
  }

  getRestaurants(refresher?: any) {    
    Keyboard.close();
    this.restaurantService.getRestaurants(this.searchTerm)
      .subscribe(res => {
        this.restaurants = res;
        refresher.complete();
      });
  }

  showDetails(details: Object) {
    this.navCtrl.push(Details, details);
  }

}
