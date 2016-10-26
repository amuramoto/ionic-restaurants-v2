import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nearby } from '../nearby/nearby';
import { Search } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nearbyRoot: any = Nearby;
  searchRoot: any = Search;
 
  constructor(public navCtrl: NavController) {

  }
}
