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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dragon_service_1 = require('../../services/dragon.service');
var DragonsComponent = (function () {
    function DragonsComponent() {
        this.title = 'DRAGON CENTER';
    }
    DragonsComponent = __decorate([
        core_1.Component({
            selector: 'dragon-container',
            templateUrl: 'app/components/dragon/views/dragons.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [dragon_service_1.DragonService]
        }), 
        __metadata('design:paramtypes', [])
    ], DragonsComponent);
    return DragonsComponent;
}());
exports.DragonsComponent = DragonsComponent;
//# sourceMappingURL=dragons.component.js.map