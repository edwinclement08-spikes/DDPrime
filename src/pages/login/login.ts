import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage/dist/storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: null,
    password: null
  };
  token: string;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    private storage: Storage,
    private localNotifications: LocalNotifications,
    private push: Push,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    // this.navCtrl.setRoot(mmmmmmMainPage);
    // return;

    // this.storage.set('name', 'Max');
    // this.storage.get('age').then((val) => {
    //   console.log('Your age is', val);
    // });
    this.user.login(this.account).subscribe((resp:any) => {
      console.log("HTTP response " + JSON.stringify(resp));
      if (resp) {
        if (resp.status === "success") {
          this.navCtrl.setRoot(MainPage);
          this.token = resp.token;
          console.log("User ");
          
          console.log(this.user.getCurrentUser());
        }
        else {
          this.loginErrorString = "Invaild email id or password"
          let toast = this.toastCtrl.create({
            message: this.loginErrorString,
            duration: 3000,
            position: 'bottom'
          });
          // toast.present();
          this.navCtrl.setRoot(MainPage);
        }
      }
    }, (err) => {
      console.log(err)
      // Unable to log in
      this.navCtrl.setRoot(MainPage);
      this.loginErrorString = "Unable to connect to server, please try again later"
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }
  notify() {
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });
    // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
    this.push.createChannel({
      id: "testchannel1",
      description: "My first test channel",
      // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      importance: 3
    }).then(() => console.log('Channel created'));
    // Delete a channel (Android O and above)
    // this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
    // Return a list of currently configured channels
    this.push.listChannels().then((channels) => console.log('List of channels', channels))
    // to initialize push notifications
    const options: PushOptions = {
      android: {},
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    }
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  sendNotification()
  {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { secret: "n" }
    });
  }
  newRequest() {
    console.log("Hitting the Url")
    this.user.newRoute(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}