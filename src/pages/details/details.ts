import { Component } from '@angular/core';
import { NavController, NavParams, Tab } from 'ionic-angular';
import { Review } from '../../components/review/review';
import { Search } from '../search/search';  
/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {

  restaurant: any;
  stars: Array<any> = new Array(5);

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, public tab: Tab) {
    this.restaurant = this.navParams.data;
  }

  isHighlighted(index: number) {
    if (this.restaurant.rating >= index) {
      return true;
    }
    return false;
  }

}
