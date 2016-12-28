import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Search } from '../pages/search/search';
import { Nearby } from '../pages/nearby/nearby';
import { Details } from '../pages/details/details';
import { RestaurantService } from '../providers/restaurant-service';
import { Review } from '../components/review/review';
import { ImageModal } from '../components/image-modal/image-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Search,
    Nearby,
    Details,
    Review,
    ImageModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Search,
    Nearby,
    Details,
    ImageModal
  ],
  providers: [RestaurantService]
})
export class AppModule {}
