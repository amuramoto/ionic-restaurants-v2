import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class User {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello User Page');
  }

}
