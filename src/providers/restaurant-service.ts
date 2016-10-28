import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';
/*
  Generated class for the RestaurantService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestaurantService {
  
  searchTerm: string = 'Restaurants';

  constructor(public http: Http, 
              public platform: Platform) {
  
  }

  getRestaurants(searchTerm: string = 'Restaurant'): Observable<any> {
    return new Observable(observer => {
      this.platform.ready().then(
        () => Geolocation.getCurrentPosition().then(
          location => this.apiRequest(searchTerm, location).subscribe(
            res => {
              observer.next(res.results);
              observer.complete();
            }
          )                     
        )
      )
    })
  }


  apiRequest(searchTerm: string, location?: Object): Observable<any> {    
    let url = 'http://ionic-workshop-api.herokuapp.com/search';
    let query = `?lat=${location['coords']['latitude']}&long=${location['coords']['longitude']}&q=${searchTerm}`;    

    return this.http.get(url + query)
      .map(res => res.json())      
  }

  getArray(size): Array<any> {
    return new Array(size);
  }

}
