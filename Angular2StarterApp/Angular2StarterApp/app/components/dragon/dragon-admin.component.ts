import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Dragon } from '../../models/dragon'
import { DragonAddFormComponent } from './forms/dragon-add-form'
import { DragonService } from '../../services/dragon.service';


@Component({
    selector: 'dragon-admin',
    templateUrl: 'app/components/dragon/views/dragon-admin.component.html',
    directives: [DragonAddFormComponent],
    providers: [DragonService]
})

export class DragonAdminComponent {
    title = 'Dragon Admin Page'
}