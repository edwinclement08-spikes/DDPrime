import { BigCardData } from './../../models/bigCard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {
  data: BigCardData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private iab: InAppBrowser) {
    this.data = navParams.get('param1');
    // this.data.trailerUrl = sanitizer.bypassSecurityTrustResourceUrl(this.data.trailerUrl);
    // this.data.imgUrl = sanitizer.bypassSecurityTrustResourceUrl(this.data.imgUrl);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
    
  }

  clickedPreview()  {
    const browser = this.iab.create(this.data.trailerUrl);
    

  }

}
