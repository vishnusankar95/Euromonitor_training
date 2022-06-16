import { Component, Input, OnInit, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() inputMessage:string | undefined;
  @Output() myOutput:EventEmitter<string>=new EventEmitter<string>();
  outputVariable='Hello I know you are my parent!!';

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputMessage);

  }

  public sendData():void
  {
    this.myOutput.emit(this.outputVariable);
  }
}
