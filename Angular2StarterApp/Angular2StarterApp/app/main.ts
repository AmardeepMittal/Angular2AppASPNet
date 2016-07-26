import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import 'rxjs/Rx';
import * as Rx from 'rxjs/Rx';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
    //{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    //{ provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);