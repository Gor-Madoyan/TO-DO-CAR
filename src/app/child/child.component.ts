import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../parent/interface';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() carArr!:Car 
  @Output() emitCar = new EventEmitter()
  ngOnInit(): void {
  }


  clearCar(val:number) {
    this.emitCar.emit(val)
  }

}
