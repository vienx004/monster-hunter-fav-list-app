import { Toggle } from 'ionic-angular';

export class SettingsService {
 private toggleChecked = false;
    //check value of toggle
    
    //pass a value from component to service and store in service
    setBackground(isAlt: boolean) {
        this.toggleChecked = isAlt;
    }
    
    //check and store current toggle value to persist state of settings
    isAltBackground(){
        console.log(this.toggleChecked);
        return this.toggleChecked;
    }
}