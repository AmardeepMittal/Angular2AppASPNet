import { RouterConfig }         from '@angular/router';
import { DashboardComponent }    from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }  from './heroes.component';
import { HeroMainComponent }  from './hero-main.component';

export const heroesRoutes: RouterConfig = [
    
    {
        path: 'hero',
        component: HeroMainComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'heroes', component: HeroesComponent },
            { path: 'detail/:id', component: HeroDetailComponent }
        ]
    },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
];