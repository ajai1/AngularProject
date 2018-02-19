import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h5{
      color: darkgreen;
    }
  `]
})

export class ServerComponent{

  name = 'Server Running in this';

}
