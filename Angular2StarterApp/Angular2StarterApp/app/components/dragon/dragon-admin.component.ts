import { Component } from '@angular/core';

@Component({
    template: `
    <h2>This is dragon Admin Page</h2>
    <p>Manage dragon here: {{title}}</p>`
})

export class DragonAdminComponent {
    title = 'Dragon Admin Page Changed'
}