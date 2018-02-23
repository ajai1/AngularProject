import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayToggle = false;
  count = 1;
  howManyClicks = [];

  toggle(){
    this.displayToggle = !this.displayToggle;
    this.howManyClicks.push(this.count++);
  }



}
