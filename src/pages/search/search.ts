import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { Keyboard } from 'ionic-native';
import { Details } from '../details/details';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

  restaurants: Array<any>;
  searchTerm: string = 'Pizza';

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public restaurantService: RestaurantService) {    
  }

  ionViewWillEnter() {  
    this.getRestaurants();
  }

  getRestaurants(refresher?: any) {    
    Keyboard.close();
    this.restaurantService.getRestaurants(this.searchTerm)
      .subscribe(res => {                
        this.restaurants = res;

        if (refresher) {
          refresher.complete();
        }
      });
  }

  showDetails(details: Object) {
    this.navCtrl.push(Details, details);
  }

}
