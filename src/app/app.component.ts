import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  settingsPage = SettingsPage;
  tabsPage = TabsPage;

  //will select after nav stack has been initialized, select by #nav reference on template
  @ViewChild('nav') nav: NavController

  onLoad(page: any)
  {
    this.nav.setRoot(page);
    console.log("close menu");
    this.menuCtrl.close();
  }

  constructor(platform: Platform, 
    private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

