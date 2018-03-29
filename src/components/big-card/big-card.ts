import { ItemData } from './../../models/itemData';
import { MovieDetailsPage } from './../../pages/movie-details/movie-details';
// import { BigCardData } from './../../models/bigCard';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/providers';

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
  @Input() data: ItemData;
  @Input() img: string;

  constructor(public navCtrl: NavController, public api:Api) {
    console.log('Hello BigCardComponent Component - constuctor');

  }
  ngOnInit(){
    console.log('Hello BigCardComponent Component - ngOnInit');
    // console.log(this.data);
    
   
  }

  openMovieDetailsPage()  {
 
    this.navCtrl.push(MovieDetailsPage, {
      param1: this.data,
  });
  }
  
}
