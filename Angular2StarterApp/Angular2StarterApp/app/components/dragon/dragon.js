"use strict";
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_center_component_1 = require('./crisis-center.component');
exports.dragonRoutes = [
    {
        path: 'crisis-center',
        component: crisis_center_component_1.CrisisCenterComponent,
        children: [
            { path: ':id', component: CrisisDetailComponent },
            { path: '', component: crisis_list_component_1.CrisisListComponent }
        ]
    }
];
//# sourceMappingURL=dragon.js.map