import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Dragon } from '../../models/dragon';
import { DragonService } from '../../services/dragon.service';

@Component({
    selector: 'dragon-list',
    templateUrl: 'app/components/dragon/views/dragon-list.component.html',
    styleUrls: ['app/components/dragon/css/dragon-list.component.css']
})

export class DragonListComponent implements OnInit {
    title = 'Dragon List'
    dragonList: Dragon[] = [];
    errorMessage: string;

    constructor(
        private router: Router,
        private dragonService: DragonService) {
    }
    
    ngOnInit() {
        this.dragonService.getDragons()
            .then(dragon => this.dragonList = dragon);
    }
    //ngOnInit() {
    //    this.dragonService.getHeroes()
    //        .subscribe(
    //        heroes => this.dragonList = heroes,
    //            error => this.errorMessage = <any>error
    //        )
    //        //.then(dragon => this.dragonList = dragon);
    //}
    showDetails(dragon: Dragon) {
        //let link = ['/hero/detail', hero.id];
        //this.router.navigate(link);
    }
}