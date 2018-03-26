import { Api } from './../../providers/api/api';
import { ItemData } from './../../models/itemData';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
// import { BigCardData } from '../../models/bigCard';


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

  bigCardDatas: ItemData[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
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
      new ItemData("Fantastic Four", 2014, "2:12", 4.5, "assets/img/movies/big/fantastic_four.jpg",
        "Action", "https://www.youtube.com/watch?v=POBI7OhGB18",
        "Los Angeles police officer Brian O'Connor must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy. ",
        [{
          "title": "Better than the 1st movie",
          "rating": "3.5",
          "description": "I just saw this and to be honest I was hesitant in buying the $8 matinée ticket but wanted to see a movie and figured what the heck. First of all the 1st film was good, IMO the sequel and then Tokyo Drift were pretty bad but the 4th installment gave a ray of hope when I first saw the trailer. I liked the fact that it had a large part of the original cast.I enjoyed this film and was surprised. They actually wrote a good story and it flowed very well, the action and driving scene's were shot and edited superbly, you did get the feeling that you were in the car at times which adds to the intensity of the driving scenes. I also like the fact that they incorporated American muscle cars instead of just imports this way the movie will appeal to people of all tastes. Overall I was pleasantly surprised of how good the film was. Also the final scene of Phoenix's demise was different than the norm. Bottom line Go see it.",
          "author": "tonyzeno75"
        },{
          "title": "Awesome Action fourth installment. Fast & Furious is tremendous!",
          "rating": "4.5",
          "author": "ivo-cobra8",
          "description": `Fast & Furious (2009) is an awesome Action packed sequel, where The Fast and the Furious (2001) stopped. This is the real sequel to The Fast and The Furious. I love that Paul Walker, Vin Diesel, Michelle Rodriguez and Jordana Brewster reprise their roles back to the roots the way they were. This is my fourth favorite best film in the series, this film Is a seat to the edge from the beginning till the end. This movie kept me thoroughly entertained from beginning to end. Sure it's a little far fetched, but who cares? 
          It's a movie, and definitely not as bad as some people are saying. Besides, the point of watching a movie is to escape reality so I don't understand why people complain when movies are not realistic. Provided a cinematic equivalent of NOS to the franchise with a tone shift that helped make it one of the most popular and profitable action series in the last decade. Excellent flick. Much better than the middle two. Just forget those movies happened. This was good balls to the walls action with much better actors with the original 4 back together. Bad idea making 2 and 3 :) 
          Vin Diesel and Paul Walker re team with Michelle Rodriguez and Jordana Brewster for the ultimate chapter of the franchise built on speed! When fugitive Dominic Toretto (Vin Diesel) returns to Los Angeles to avenge a loved one's death, it reignites his feud with agent Brian O'Conner (Walker). But, as they race through crowded city streets and across international lines, they must test their loyalties by joining together to bring down a shared enemy. From big rig heists to precision tunnel crawls, Fast & Furious takes you back into the high-octane world, which lives for speed, drives for the rush and breaks all the rules!
          'Maybe you're the bad guy pretending to be the good guy.' 
          This film is more about stopping a notorious drug lord Arturo Braga and avenging the murder of Letty (Michelle Rodriguez). This film is set back in Los Angles when everything started, after 5.years of leaving the city of Angeles for Dominican Republic after Dom (Vin Diesel) and his crew become a Wanted Fugitives. Letty was murdered when she was mixed up in a drug racers mule cartel. She knew the people who hired her, will double crossed her, while trying to escape the flying bullets she was killed by a drug lord's henchman. That weary angrier Dom (Vin Diesel) brings him back to Los Angeles, to avenge his loved one's death and tracking down Drug Lord Braga and killing him. Brian O'Connor (Paul Walker), is now an FBI agent, and he is assigned to track down a notorious drug lord named Arturo Braga. Both men faces each other in a final showdown. Braga is looking for a fast drivers that are driving and smuggling trough desert New Mexico drugs. Brian goes again undercover only to find out that he and Dom (Vin Diesel) are been double crossed and set up on the same way that was Letty (Michelle Rodriguez) was.  
          This film is filled with full action, fast cars, full of stunts and beautiful women. Gal Gadot is tremendous as Gisele Harabo it was her first role in this film and she was awesome, she acted the character terrific. Paul walker was the best in this film, finally, finally they did something with the character, he become an FBI Agent which I love that with the character In this movie. I love that Dom (Vin Diesel) at the end of the film didn't run, he surrender and I love how Brian ( Paul Walker) was testifying for him in the court. Seriously this film Kicks ass, although I prefer Fast Five over this Action Flick, but that doesn't mean this film did not do the job right, it did! And this film is highly underrated and criticized by critics. Also Han (Sung Kang) has a small scene in the beginning of this film, that was before they killed the beloved character in The Fast and the Furious: Tokyo Drift (2006). 
          The rating I am giving to this film is 9. Anything below 7 would be ridiculous, if anyone would not say that this wasn't At least A GOOD ACTION FILM! (it is sure as hell better than all the comic movies that are getting high scores.)`
        }
        

        ])
    ]

    let temp:any;
    console.log();
    
    api.post("showDetails", "", {"itemcode": 2}).subscribe((err) =>   {
        console.log(err);
    })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

  }

  showSearchPage() {
    console.log("sfjh");

    this.navCtrl.push(SearchPage);
  }

  showUserPage() {

  }
}