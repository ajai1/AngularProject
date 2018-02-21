import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = 'No Server Created';
  displayText = '';
  constructor() {
    setTimeout(()=>{
        this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverStatus = 'Server Created...!';
  }

  onUpdateServer(event: Event){
    this.displayText = (<HTMLInputElement>event.target).value;
  }

}
