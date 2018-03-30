import { ItemData } from './../../models/itemData';
import { MovieDetailsPage } from './../../pages/movie-details/movie-details';
// import { BigCardData } from './../../models/bigCard';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Api } from '../../providers/providers';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(public navCtrl: NavController, public api:Api, public sanitizer: DomSanitizer) {
    console.log('Hello BigCardComponent Component - constuctor');
  }
  ngOnInit(){
    console.log('Hello BigCardComponent Component - ngOnInit');
    // console.log(this.data);
    
    this.data.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.imgUrl);

  }

  openMovieDetailsPage()  {
 
    this.navCtrl.push(MovieDetailsPage, {
      param1: this.data,
  });
  }
  
}
