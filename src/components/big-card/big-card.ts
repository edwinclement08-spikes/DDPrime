import { BigCardData } from './../../models/bigCard';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the BigCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'big-card',
  templateUrl: 'big-card.html'
})
export class BigCardComponent {

  text: string;
  @Input() data: BigCardData;
  @Input() img: string;
 
  constructor() {
    console.log('Hello BigCardComponent Component - constuctor');
    


  }
  ngOnInit(){
    console.log('Hello BigCardComponent Component - ngOnInit');
    console.log(this.data);
    
    
 
  }
  
}
