import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Review } from '../../components/review/review';
import { ImageModal } from '../../components/image-modal/image-modal';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {

  restaurant: any;
  stars: Array<any> = new Array(5);

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.restaurant = this.navParams.data;
    this.shortenName();
  }

  showImage(name: string, photos: Array<any>, startIndex: number) {
    let imgModal = this.modalCtrl.create(ImageModal, {name: this.restaurant.shortname, photos: photos, startIndex: startIndex});
    imgModal.present();
  }

  shortenName() {
    let name = this.restaurant.name;
    if (name.length > 20) {
      name = name.slice(0, 19) + '...';       
    }
    this.restaurant.shortname = name;
  }

  isActive(index: number) {
    if (this.restaurant.rating >= index) {
      return true;
    }
    return false;
  }

}
