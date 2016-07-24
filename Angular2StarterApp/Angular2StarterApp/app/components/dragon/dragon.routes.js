"use strict";
var dragons_component_1 = require('./dragons.component');
var dragon_detail_component_1 = require('./dragon-detail.component');
var dragon_list_component_1 = require('./dragon-list.component');
var dragon_admin_component_1 = require('./dragon-admin.component');
exports.dragonRoutes = [
    {
        path: 'dragons',
        component: dragons_component_1.DragonsComponent,
        children: [
            {
                path: 'admin',
                component: dragon_admin_component_1.DragonAdminComponent,
            },
            { path: ':id', component: dragon_detail_component_1.DragonDetailComponent },
            { path: '', component: dragon_list_component_1.DragonListComponent }
        ]
    }
];
//# sourceMappingURL=dragon.routes.js.map