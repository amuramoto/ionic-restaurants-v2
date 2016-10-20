import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { User } from '../pages/user/user';
import { Nearby } from '../pages/nearby/nearby';
import { RestaurantService } from '../providers/restaurant-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Search,
    User,
    Nearby
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Search,
    User,
    Nearby
  ],
  providers: [RestaurantService]
})
export class AppModule {}
