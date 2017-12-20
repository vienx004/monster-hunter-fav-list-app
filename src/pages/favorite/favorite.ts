import { SettingsService } from './../../services/settings.service';
import { FaveMonsterPage } from './fave-monster/fave-monster';
import { MonstersService } from './../../services/monsters.service';
import { Monster } from './../../data/monsters.interface';
import { Component } from '@angular/core';
import { ModalController, Toggle } from 'ionic-angular';

@Component({
    selector: 'favorite-page',
    templateUrl: 'favorite.html'
})

export class FavoritePage {
    monsters: Monster[];
    checkedToggle: boolean;
    faveMonsterPage = FaveMonsterPage;
    
    //inject MonstersService to monstersService
    constructor (
        private monstersService: MonstersService,
        private modalCtrl: ModalController,
        private settingsService: SettingsService){}

    //ionViewWillEnter will execute even if cached
    ionViewWillEnter() {
        this.monsters = this.monstersService.getFavoriteMonsters();
    }

    onViewMonster(monster: Monster) {
        const modal = this.modalCtrl.create(this.faveMonsterPage, monster);
        modal.present();
        modal.onDidDismiss((remove: boolean) => {
            if(remove == true) {
                this.onRemoveFromFavorites(monster);    
        }
        });
    }

    onRemoveFromFavorites(monster: Monster){
        console.log(monster);
        this.monstersService.removeMonsterFromFavorites(monster);
        this.monsters = this.monstersService.getFavoriteMonsters();
    }

    getBackground(){
        if(this.settingsService.isAltBackground() == true) {
            return "altBackground";
        }else {
            return "defaultBackground";
        }
    }

}