"use strict";
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var hero_routes_1 = require('./components/hero/hero.routes');
var dragon_routes_1 = require('./components/dragon/dragon.routes');
var routes = hero_routes_1.heroesRoutes.concat(dragon_routes_1.dragonRoutes);
exports.appRouterProviders = [
    router_1.provideRouter(routes),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '' }),
];
//# sourceMappingURL=app.routes.js.map