import { User } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  user: any = {
    name: "",
    phonenumber: "",
    email: "",
    address: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: User) {
    console.log("user page started");
  }
  ionViewDidLoad() {
    console.log('UserPage::Current User');
    this.user = this.userProvider.getCurrentUser();
    console.log(this.user);


  }
}
