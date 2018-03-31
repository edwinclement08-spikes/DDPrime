import { User } from './../../providers/user/user';
import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemData } from '../../models/itemData';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  data: ItemData;
  message : any;
  error : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api, public user: User) {
    this.data = navParams.get('param1');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  buy() {
    this.api.post("billing_record", {
      "amount": this.data.cost,
      "email": this.user.getCurrentUser().email,
      "itemcode": this.data.itemCode,
      "channel_id": this.data.channel_id,
      "genre": this.data.genre
    }).subscribe((data) => {
      this.message = "Your stuff is sorted";
      this.error = JSON.stringify(data);
    })
  }
}
