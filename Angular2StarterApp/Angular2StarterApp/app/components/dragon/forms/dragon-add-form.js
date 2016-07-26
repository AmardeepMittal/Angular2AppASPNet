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
var dragon_1 = require('../../../models/dragon');
var dragon_service_1 = require('../../../services/dragon.service');
var DragonAddFormComponent = (function () {
    function DragonAddFormComponent(dragonService) {
        this.dragonService = dragonService;
        this.title = 'Dragon Form';
        this.submitted = false;
        this.dragonInfo = new dragon_1.Dragon();
        this.abiList = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.active = true;
    }
    DragonAddFormComponent.prototype.addDragon = function () {
        var _this = this;
        return this.dragonService.addDragon(this.dragonInfo)
            .then(function (dragon) {
            console.log(dragon);
            _this.submitted = true;
            _this.dragonInfo = dragon;
        });
    };
    DragonAddFormComponent.prototype.newDragon = function () {
        this.dragonInfo = new dragon_1.Dragon();
        //this.active = false;
        //setTimeout(() => this.active = true, 0);
    };
    DragonAddFormComponent = __decorate([
        core_1.Component({
            selector: 'dragon-add-form',
            templateUrl: 'app/components/dragon/forms/dragon-add-form.html',
            styleUrls: ['app/components/dragon/forms/dragon-add-form.css']
        }), 
        __metadata('design:paramtypes', [dragon_service_1.DragonService])
    ], DragonAddFormComponent);
    return DragonAddFormComponent;
}());
exports.DragonAddFormComponent = DragonAddFormComponent;
//# sourceMappingURL=dragon-add-form.js.map