import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DragonService } from '../../services/dragon.service';

@Component({
    selector: 'dragon-container',
    templateUrl: 'app/components/dragon/views/dragons.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DragonService]
})

export class DragonsComponent {
    title = 'DRAGON CENTER'
}