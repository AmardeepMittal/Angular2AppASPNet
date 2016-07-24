
import { RouterConfig }          from '@angular/router';
import { DragonsComponent } from './dragons.component';
import { DragonDetailComponent }   from './dragon-detail.component';
import { DragonListComponent } from './dragon-list.component';
import { DragonAdminComponent } from './dragon-admin.component';

export const dragonRoutes: RouterConfig = [
    {
        path: 'dragons',
        component: DragonsComponent,
        children: [
            {
                path: 'admin',
                component: DragonAdminComponent,
            },
            { path: ':id', component: DragonDetailComponent },
            { path: '', component: DragonListComponent }
        ]
    }
];