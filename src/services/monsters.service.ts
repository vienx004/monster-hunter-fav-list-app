import { Monster } from './../data/monsters.interface';

export class MonstersService {
    //store all favorited monsters in a type Monster array
    private favoriteMonsters: Monster[] = [];

    //methods to add new favorite
    addMonsterToFavorites(monster: Monster) {
        this.favoriteMonsters.push(monster);
        console.log(this.favoriteMonsters);
    }

    //method to remove favorite
    removeMonsterFromFavorites(monster: Monster){
        //return position of monster in the favorites array
        //search for favorite moster with matching id
        const position = this.favoriteMonsters.findIndex((monsterElement: Monster) => {
            return monsterElement.id == monster.id;
        });
        this.favoriteMonsters.splice(position, 1);
    }

    //method get favorites
    getFavoriteMonsters() {
        return this.favoriteMonsters.slice();
    }
    
    //method to check if monster is currently in Favorite Monsters array
    isMonsterFavorite(monster: Monster) {
        //monsterElement is just a variable to store the Monster object in the favorite Monster array
        //the second return checks to see if the monsterElement.id is the same as the monster.id that is passed from the monsters
        return this.favoriteMonsters.find((monsterElement: Monster) => {
            return monsterElement.id == monster.id;
        });
    }
}