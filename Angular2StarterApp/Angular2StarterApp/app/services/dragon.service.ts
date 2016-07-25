import { Dragon } from '../models/dragon';
import { DRAGONS } from '../appdata/mock-dragons';
import { Injectable } from '@angular/core';

@Injectable()
export class DragonService {
    getHeroes() {
        return Promise.resolve(DRAGONS);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Dragon[]>(resolve =>
            setTimeout(() => resolve(DRAGONS), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}