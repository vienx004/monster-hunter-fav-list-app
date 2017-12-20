import { SettingsService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { Toggle, NavParams } from 'ionic-angular';

@Component({
    selector: 'settings-page',
    templateUrl: 'settings.html'
})

export class SettingsPage {
toggle: Toggle

    constructor(
        private navParams: NavParams,
        private settingsService: SettingsService
    ){}

 onToggle(toggle: Toggle){
    this.settingsService.setBackground(toggle.checked);
 } 

 checkedAltBackground(){
    return this.settingsService.isAltBackground();
 }

}