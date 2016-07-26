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
var http_1 = require('@angular/http'); //For Retrival 
var Observable_1 = require('rxjs/Observable');
//import * as Rx from 'rxjs/Rx';
var DragonService = (function () {
    function DragonService(http) {
        this.http = http;
        this.dragonUrl = '/getDragons'; // URL to web api
        this.adddragonUrl = '/addDragon';
    }
    DragonService.prototype.getDragons = function () {
        var _this = this;
        return this.http.get(this.dragonUrl)
            .forEach(function (p) { return _this.dragons = _this.extractData(p); })
            .then(function (response) { return _this.dragons; })
            .catch(this.handleError);
        //.toPromise()
        //.then(response => response.json().data as Dragon[])
        //.catch(this.handleError);
    };
    DragonService.prototype.addDragon = function (obj) {
        var _this = this;
        var body = JSON.stringify({ obj: obj });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        console.log('before ajax');
        console.log(obj);
        return this.http.post(this.adddragonUrl, obj)
            .forEach(function (p) { return _this.addedDragon = _this.extractData(p); })
            .then(function (response) { return _this.addedDragon; });
        //.catch(this.handleError);
        //.map(this.extractData)
        //.catch(this.handleError);
    };
    DragonService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DragonService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    DragonService.prototype.getDragon = function (id) {
        return this.getDragons()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    DragonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DragonService);
    return DragonService;
}());
exports.DragonService = DragonService;
//# sourceMappingURL=dragon.service.js.map