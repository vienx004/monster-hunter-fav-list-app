import { MonstersPage } from './monsters/monsters';
import { Monster } from '../../data/monsters.interface';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import monsters from '../../data/monsters'

@Component({
    selector: 'monsters-library-page',
    templateUrl: 'monsters-library.html',
})

export class MonstersLibraryPage implements OnInit{
    monsterCollection: {generation: string, monsters: Monster[], icon: string}[];
    //monsterCollection is an array of objects, must at [] at the end of the collection
    
    monstersPage = MonstersPage

    ngOnInit() {
        this.monsterCollection = monsters;
    }
}