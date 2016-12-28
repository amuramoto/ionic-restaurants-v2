import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
/*
  Generated class for the ImageModal component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'image-modal',
  templateUrl: 'image-modal.html'
})
export class ImageModal {

  imageObj: any;
  name: string;

  constructor(params: NavParams) {
    this.imageObj = params.data.imageObj;
    this.name = params.data.name;
  }

}
