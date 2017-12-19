import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'fave-monster-page',
    templateUrl: 'fave-monster.html'
})

export class FaveMonsterPage {
    name: string;
    habitat: string;
    image: string;

    constructor (
        private navCtrl: NavController,
        private viewCtrl: ViewController,
        private navParams: NavParams){}
    
    ionViewDidLoad() {
        this.name = this.navParams.get('name');
        this.habitat = this.navParams.get('habitat');
        this.image = this.navParams.get('image');
    }

    onClose(remove=false){
        this.viewCtrl.dismiss(remove);
    }
}