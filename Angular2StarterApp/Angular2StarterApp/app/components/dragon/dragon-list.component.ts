import { Component } from '@angular/core';

@Component({
    template: `
    <h2>This is DRagon list page</h2>
    <p>Get your dragon here: {{title}}</p>`
})

export class DragonListComponent {
    title = 'Dragon List'
}