
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators'; //This is not Working (Open BUG)

import { HeroService } from './services/hero.service';

@Component({
    selector: 'moiz-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService, HTTP_PROVIDERS 
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
