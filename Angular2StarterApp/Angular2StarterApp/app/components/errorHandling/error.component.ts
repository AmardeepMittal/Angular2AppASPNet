import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/components/error/error.component.html'
    //styleUrls: ['app/components/error/css/hero-detail.component.css']
})

export class ErrorComponent {
    title = "No Page Found!"
    body = "The page you requested was not found. Please check your path again and try again."
    btnText = "Help?" 
}