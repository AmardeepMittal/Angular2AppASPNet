import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DragonService } from '../../services/dragon.service';

@Component({
    template: `
    <h2>DRAGON CENTER</h2>
    <p>This is First Main Page : {{title}}</p><br/>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [DragonService]
})

export class DragonsComponent {
    title = 'Page 1'
}