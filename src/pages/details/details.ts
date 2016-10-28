import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Review } from '../../components/review/review';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {

  restaurant: any;
  stars: Array<any> = new Array(5);

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.restaurant = this.navParams.data;
  }

  isActive(index: number) {
    if (this.restaurant.rating >= index) {
      return true;
    }
    return false;
  }

}
