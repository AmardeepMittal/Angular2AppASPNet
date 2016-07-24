/// <reference path="main.ts" />
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './services/hero.service';

@Component({
    selector: 'moiz-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
