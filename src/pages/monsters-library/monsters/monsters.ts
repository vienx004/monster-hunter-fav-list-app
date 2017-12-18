import { Monster } from './../../../data/monsters.interface';
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular'

@Component({
    selector: 'monsters-page',
    templateUrl: 'monsters.html',
})

export class MonstersPage implements OnInit{
    monsterGroup: {generation: string, monsters: Monster[], icon:string};

    constructor(private navParams: NavParams){

    }

    ngOnInit() {
        this.monsterGroup = this.navParams.data;
    }

    /*ionViewDidLoad() {
        this.monsterGroup = this.navParams.data;
        Add elvis operator (?) in tempalte to use this approach
    }
    //load data only on new load (not on cache)
    */
}