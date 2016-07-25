import { provideRouter, RouterConfig }  from '@angular/router';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { heroesRoutes } from './components/hero/hero.routes';
import { dragonRoutes } from './components/dragon/dragon.routes';
//import { errorRoutes } from './components/errorHandling/error.routes';

const routes: RouterConfig = [
    //{
    //    path: '',
    //    redirectTo: '/hero',
    //    pathMatch: 'full'
    //},
    { path: '', redirectTo: 'hero', pathMatch: 'full' },
    ...heroesRoutes,
    ...dragonRoutes
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