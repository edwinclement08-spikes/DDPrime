import { User } from './../../providers/user/user';
import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommendation',
  templateUrl: 'recommendation.html',
})
export class RecommendationPage {
  recommendationsData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api, public user: User) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendationPage');
    this.api.post("recommendation", {
      "email": this.user.getCurrentUser().email,
    }).subscribe((data) => {
      this.recommendationsData = data;
      console.log('(recommendation.ts::29) => ' + JSON.stringify(data));
      
    })
  }

}
