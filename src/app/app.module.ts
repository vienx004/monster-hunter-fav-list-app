import { MonstersService } from './../services/monsters.service';
import { MonstersPage } from './../pages/monsters-library/monsters/monsters';
import { LibraryPage } from './../pages/library/library';
import { TabsPage } from './../pages/tabs/tabs';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritePage } from '../pages/favorite/favorite';
import { SettingsPage } from '../pages/settings/settings';
import { MonstersLibraryPage } from './../pages/monsters-library/monsters-library';
import { FaveMonsterPage } from './../pages/favorite/fave-monster/fave-monster';



@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    SettingsPage,
    MonstersLibraryPage,
    FaveMonsterPage,
    TabsPage,
    LibraryPage,
    MonstersPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    SettingsPage,
    MonstersLibraryPage,
    FaveMonsterPage,
    TabsPage,
    LibraryPage,
    MonstersPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonstersService
  ]
})
export class AppModule {}
