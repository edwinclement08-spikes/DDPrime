import { LocalNotifications } from '@ionic-native/local-notifications';
import { PaymentPage } from './../payment/payment';
import { Api } from './../../providers/api/api';
import { ItemData } from './../../models/itemData';
// import { BigCardData } from './../../models/bigCard';
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
  data: ItemData;
  message: string;


  showNewCommentSection: boolean;

  constructor(public api: Api, public localNotifications: LocalNotifications, public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private iab: InAppBrowser) {
    this.data = navParams.get('param1');
    this.showNewCommentSection = false;
    // this.data.trailerUrl = sanitizer.bypassSecurityTrustResourceUrl(this.data.trailerUrl);
    // this.data.imgUrl = sanitizer.bypassSecurityTrustResourceUrl(this.data.imgUrl);
  }


  addReminder() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Watch ' + this.data.title + " at " + this.data.timing_start,
      // sound: 'file://sound.mp3' ,
      data: { secret: "sfseddfsdf" }
    });


  }

  loadPaymentPage(cost) {

    this.navCtrl.push('PaymentPage',{
      param1: this.data      
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

  clickedPreview() {
    console.log("fess");
    const browser = this.iab.create(this.data.trailerUrl);
    this.message = "tfvj";
  }

  clickedAddComment() {
    if (this.showNewCommentSection) {
      this.showNewCommentSection = false;
    } else {
      this.showNewCommentSection = true
    }
  }

  newComment = {
    "title": "",
    "rating": "",
    "author": "",
    "description": ""
  };


  ratingStarClicked(i, half) {
    console.log(i);
    console.log(half);

    this.newComment.rating = i + (half ? -0.5 : 0);
  }

  getBuyOrFreeString()  {
    if(this.data.cost == 0) {
      return "Free";
    } else {
      return "Buy: ₹ " + this.data.cost
    }
  }



}
