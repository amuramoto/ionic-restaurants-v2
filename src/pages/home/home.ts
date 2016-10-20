import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nearby } from '../nearby/nearby';
import { Search } from '../search/search';
import { User } from '../user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nearbyRoot: any = Nearby;
  searchRoot: any = Search;
  userRoot: any = User;

  constructor(public navCtrl: NavController) {
    
  }

}
