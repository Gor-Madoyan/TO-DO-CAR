import { splitAtColon } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Car } from './interface';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  
})


export class ParentComponent implements OnInit {

  mark:string = '';
  color:string = '';
  year:number = 0;
  id!:number 

  CarData:Car[]  = [
    {
    mark: 'BMW',
    color: 'black',
    year: 2010,
    id: 0
  },
  {
    mark: 'Mercedes',
    color: 'red',
    year: 2018,
    id: 1
  },
  {
    mark: 'Lexus',
    color: 'white',
    year: 2009,
    id:2
  }
]

 
  constructor() { }

  ngOnInit(): void {
  }

  creatCar():void {
   const newCars =  {
    mark: this.mark,
    color: this.color,
    year: this.year,
    id: this.id
    }
    this.CarData.push(newCars)
    console.log(newCars);
    
  }

  clearCarItem(value:number) {
    this.CarData.forEach((val, i )=>{
      if(val.id  === value) {
        this.CarData.splice(i, 1)
      }
    }) 
    
  }

}
