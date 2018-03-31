import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RemotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remote',
  templateUrl: 'remote.html',
})
export class RemotePage {
  keyPressed:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:Api) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemotePage');
  }
  onClick(keyPress){
    this.keyPressed=keyPress;
    console.log(this.keyPressed);
    // req.params.button = 
    // this.api.get("remote",)
  }
}
