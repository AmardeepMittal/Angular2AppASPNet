
import { RouterConfig }          from '@angular/router';
import { ErrorComponent } from './error.component';

export const errorRoutes: RouterConfig = [

    { path: '*path', component: ErrorComponent }
];