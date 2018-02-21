import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  displayText = '';

  enableBtn = false;

  constructor() { }

  ngOnInit() {
  }

  btnVisibility(){
    if(this.displayText===''){
      this.enableBtn = false;
    }else{
        this.enableBtn = true;
    }
    return this.enableBtn;
  }

  resetValue(){
    this.displayText = '';
  }

}
