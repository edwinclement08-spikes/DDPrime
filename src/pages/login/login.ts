import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';

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
  token:string;
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    // this.navCtrl.setRoot(MainPage);
    // return;
    this.user.login(this.account).subscribe((resp:any) => {
      console.log("HTTP response " + JSON.stringify(resp));
      if (resp) {
        if (resp.status === "success")
        {
          this.navCtrl.setRoot(MainPage);
          this.token = resp.token;
        }
        else {
          this.loginErrorString = "Invaild email id or password"
          let toast = this.toastCtrl.create({
            message: this.loginErrorString,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      }
    }, (err) => {
      console.log(err)
      // Unable to log in
      this.loginErrorString = "Unable to connect to server, please try again later"
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
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