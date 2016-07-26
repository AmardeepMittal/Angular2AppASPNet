import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Dragon } from '../../../models/dragon'
import { DragonService } from '../../../services/dragon.service';

@Component({
    selector: 'dragon-add-form',
    templateUrl: 'app/components/dragon/forms/dragon-add-form.html',
    styleUrls: ['app/components/dragon/forms/dragon-add-form.css']
})


export class DragonAddFormComponent {
    title = 'Dragon Form'
    submitted = false;

    dragonInfo: Dragon = new Dragon();

    abiList = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    constructor(
        private dragonService: DragonService) {
    }

    addDragon() {
        return this.dragonService.addDragon(this.dragonInfo)
            .then(dragon => {
                console.log(dragon);
                this.submitted = true; 
                this.dragonInfo = dragon;
            });
    }
    active = true;
    newDragon() {
        this.dragonInfo = new Dragon();
        //this.active = false;
        //setTimeout(() => this.active = true, 0);
    }

    //showFormControls(form: NgForm) {

    //    return form && form.controls['name'] &&
    //        form.controls['name'].value; // Dr. IQ
    //}
}