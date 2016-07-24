"use strict";
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
exports.heroesRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent }
];
//# sourceMappingURL=hero.routes.js.map