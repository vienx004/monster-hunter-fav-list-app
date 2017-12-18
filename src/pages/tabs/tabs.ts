import { Component } from '@angular/core';
import { FavoritePage } from '../favorite/favorite';
import { MonstersLibraryPage } from '../monsters-library/monsters-library';


@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    favoritePage = FavoritePage;
    monstersPage = MonstersLibraryPage;

    constructor(){ 

    }
}