import { Component } from '@angular/core';

@Component({
    template: `
    <h2>This is dragon detail page</h2>
    <p>Get your dragon here: {{title}}</p>`
})

export class DragonDetailComponent {
    title = 'Dragon Detail'
}