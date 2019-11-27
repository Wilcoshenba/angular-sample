import { Component, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Component({
  selector: 'router-outlet',
  template: `
    <h1>{{welcome}}</h1>
    `
})
export class AppComponent {
  title = 'angular-app';
  welcome = 'Hi User';
  name="";
}
