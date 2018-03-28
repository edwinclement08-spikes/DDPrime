import { UserPage } from './../user/user';
import { Api } from './../../providers/api/api';
import { ItemData } from './../../models/itemData';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { BigCardData } from '../../models/bigCard';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  user: any;

  images: any;
  bigImages: any;
  data:any;
  bigCardDatas: ItemData[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    console.log('constructor MainPage');
    api.post("showDetails", {"itemcode": "2"}).subscribe((data) =>   {
      JSON.stringify(data);
      this.data = data
      debugger;
      this.bigCardDatas = [
        new ItemData(data)
      ]
      debugger;
    });


    this.user = {
      img: "assets/img/photo-crop.jpeg"
    }

    this.images = [
      "assets/img/movies/blade runner 2049.jpg",
      "assets/img/movies/ResidentEvil.jpg",
      "assets/img/movies/happy.jpg",

      "assets/img/movies/dunkirk.jpg",
      "assets/img/movies/fistFight.jpg",
      "assets/img/movies/aWrinkleInTime.jpg",

      "assets/img/movies/baywatch.jpg",
      "assets/img/movies/tombRaider.jpg",
      "assets/img/movies/blackPanther.jpg",

    ];

    this.bigImages = [
      "assets/img/movies/big/fantastic_four.jpg",
      "assets/img/movies/big/Mockingjay.jpg",
      "assets/img/movies/big/horns.jpg",
      "assets/img/movies/big/movie-guide-march.jpg"];

    
      

    let temp:any;
    console.log();
    
    

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

  }

  showSearchPage() {
    console.log("sfjh");

    this.navCtrl.push(SearchPage);
  }

  showUserPage() {
    this.navCtrl.push(UserPage);
  }
  
}