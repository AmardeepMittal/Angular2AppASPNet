"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_dragons_1 = require('../appdata/mock-dragons');
var core_1 = require('@angular/core');
var DragonService = (function () {
    function DragonService() {
    }
    DragonService.prototype.getHeroes = function () {
        return Promise.resolve(mock_dragons_1.DRAGONS);
    };
    // See the "Take it slow" appendix
    DragonService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_dragons_1.DRAGONS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    DragonService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    DragonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DragonService);
    return DragonService;
}());
exports.DragonService = DragonService;
//# sourceMappingURL=dragon.service.js.map