import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-modal',
  templateUrl: 'search-modal.html'
})
export class SearchModalComponent {

  text: string;

  constructor(params: NavParams) {
    console.log('Hello SearchModalComponent Component');
    this.text = 'Hello World';
  }

}



