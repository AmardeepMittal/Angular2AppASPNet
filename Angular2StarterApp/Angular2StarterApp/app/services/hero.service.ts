import { Hero } from '../models/hero';
import { HEROES } from '../appdata/mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    getHeroes() {
        return true ? Promise.resolve(HEROES) : Promise.resolve(new Array<Hero>());
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}