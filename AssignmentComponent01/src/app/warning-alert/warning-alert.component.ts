import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
      h2{
        color : black;
        background : red;
      }
  `]
})

export class WarningAlertComponent {
  display = "Warning Alert"
}
