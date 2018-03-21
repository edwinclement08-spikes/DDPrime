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
  @Input() img:string;

 
  constructor() {
    console.log('Hello BigCardComponent Component');
    this.text = 'Hello World';

  }
  ionViewDidLoad(){
 
  }
  
}
