"use strict";
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_main_component_1 = require('./hero-main.component');
exports.heroesRoutes = [
    {
        path: 'hero',
        component: hero_main_component_1.HeroMainComponent,
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'heroes', component: heroes_component_1.HeroesComponent },
            { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent }
        ]
    },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent }
];
//# sourceMappingURL=hero.routes.js.map