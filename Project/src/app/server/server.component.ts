import { Component, Input } from '@angular/core';

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

  @Input() server: string;
  name = 'successfully';

}
