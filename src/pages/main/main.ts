import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  bigCardDatas: BigCardData[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('constructor MainPage');
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

    this.bigCardDatas = [
      new BigCardData("Fantastic Four", 2014, "2:12", 4.5, "assets/img/movies/big/fantastic_four.jpg",
        "Action", "https://www.youtube.com/watch?v=POBI7OhGB18")
    ]

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

  }

  showSearchPage() {
    console.log("sfjh");

    this.navCtrl.push("SearchPage");
  }

  showUserPage() {

  }
}