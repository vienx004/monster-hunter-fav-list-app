import { MonstersService } from './../../../services/monsters.service';
import { Monster } from './../../../data/monsters.interface';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular'

@Component({
    selector: 'monsters-page',
    templateUrl: 'monsters.html'
})

export class MonstersPage implements OnInit{
    monsterGroup: {generation: string, monsters: Monster[], icon:string};

    constructor(
        private navParams: NavParams,
        private alertCtrl: AlertController,
        //to use Service must inject the service
        private monstersService: MonstersService){}

    ngOnInit() {
        this.monsterGroup = this.navParams.data;
    }

    /*ionViewDidLoad() {
        this.monsterGroup = this.navParams.data;
        Add elvis operator (?) in tempalte to use this approach
    }
    //load data only on new load (not on cache)
    */

    onAddToFavorite(selectedMonster: Monster) {
        //create alert 
        const alert = this.alertCtrl.create({
            title: 'Add Monster',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the monster?',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        console.log('Ok');
                        this.monstersService.addMonsterToFavorites(selectedMonster);
                    }
                    //handlers tells which code to execute when clicked
                },
                {
                    text: 'No, I changed my mind!',
                    //tells ionic to just dimiss alert
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelled!');
                    }
                }
            ]
        });

        alert.present();
    }
    //selectedMonster is param that will be passed when you click on monster, Monster in this case is the type
    
    onRemoveFromFavorite(selectedMonster: Monster) {
        const alert = this.alertCtrl.create({
            title: 'Remove Monster',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to remove the monster?',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: () => {
                        console.log('Ok');
                        this.monstersService.removeMonsterFromFavorites(selectedMonster);
                    }
                    //handlers tells which code to execute when clicked
                },
                {
                    text: 'No, I changed my mind!',
                    //tells ionic to just dimiss alert
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelled!');
                    }
                }
            ]
        });

        alert.present();
    }

    isFavorite(monster: Monster){
        return this.monstersService.isMonsterFavorite(monster);
    }
}