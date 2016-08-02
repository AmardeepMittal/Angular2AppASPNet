import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; //For Retrival 
import { Headers, RequestOptions } from '@angular/http'; //Saving 
import { Observable }     from 'rxjs/Observable';

import { Dragon } from '../models/dragon';

//import * as Rx from 'rxjs/Rx';

@Injectable()
export class DragonService {
    private dragonUrl = '/getDragons';  // URL to web api
    private adddragonUrl = '/addDragon';
    constructor(private http: Http) { }

    private dragons: Dragon[]
    private addedDragon: Dragon

    getDragons(): Promise<Dragon[]> {
        return true ? this.http.get(this.dragonUrl)
            .forEach(p => this.dragons = this.extractData(p) as Dragon[])
            .then(response => this.dragons)
            .catch(this.handleError) : Promise.resolve( this.dragons );
            //.toPromise()
            //.then(response => response.json().data as Dragon[])
            //.catch(this.handleError);
    }
    addDragon(obj: Dragon) {
        let body = JSON.stringify({ obj });
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        console.log('before ajax');
        console.log(obj);
        return this.http.post(this.adddragonUrl, obj)
            .forEach(p => this.addedDragon = this.extractData(p) as Dragon)
            .then(response => this.addedDragon)
        //.catch(this.handleError);
        //.map(this.extractData)
        //.catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getDragon(id: number) {
        return this.getDragons()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}