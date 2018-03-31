import { Component } from '@angular/core';

/**
 * Generated class for the NumberPadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-pad',
  templateUrl: 'number-pad.html'
})
export class NumberPadComponent {

  text: string;

  constructor() {
    console.log('Hello NumberPadComponent Component');
    this.text = 'Hello World';
  }

}
