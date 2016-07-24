import { provideRouter, RouterConfig }  from '@angular/router';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { heroesRoutes } from './components/hero/hero.routes';
import { dragonRoutes } from './components/dragon/dragon.routes';

const routes: RouterConfig = [
    ...heroesRoutes,
    ...dragonRoutes
    //{
    //    path: '',
    //    redirectTo: '/dashboard',
    //    pathMatch: 'full'
    //},
    //{
    //    path: 'dragon',
    //    component: DragonsComponent
    //}
    //{
    //    path: 'detail/:id',
    //    component: HeroDetailComponent
    //},
    //{
    //    path: 'heroes',
    //    component: HeroesComponent
    //}
];

export const appRouterProviders = [
    provideRouter(routes),
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(APP_BASE_HREF, { useValue: '' }),
];