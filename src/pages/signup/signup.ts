import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string, phonenumber: number, address: string };
  passwordRetyped: string;
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
    this.account = {
      name: "Joshua Noronha",
      email: "ruttajosh@gmail.com",
      password: "joshua@123",
      phonenumber: 9833319513,
      address: "null"
    };
    this.signupErrorString = "Sign Up Error, Please try again later";
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = "Sign Up Error, Please try again later";
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    // this.navCtrl.setRoot(MainPage);
    // return;
    var account = this.account;
    console.log(this.account)

    console.log("Do signup")
    if (account.name && this.validateEmail(account.email) && account.phonenumber && this.validatePhone(this.checkPhoneFormat(account.phonenumber)) && account.address && this.matchPassword() && this.validatePassword(account.password))
      this.user.signup(this.account).subscribe((resp) => {
        if (resp.status === "success")
          this.navCtrl.setRoot(MainPage);
        else {
          console.log(JSON.stringify(resp.message))
          this.signupErrorString = resp.message;
          let toast = this.toastCtrl.create({
            message: this.signupErrorString,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      }, (err) => {
        // Unable to sign up
        this.signupErrorString = "Connection Error, Please try again later";
        let toast = this.toastCtrl.create({
          message: this.signupErrorString,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });
    else {
      this.signupErrorString = "Please enter correct credentials";
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(String(email).toLowerCase());
    if (!test) {
      console.log("Failed at email regex");
      this.signupErrorString = "Please enter a valid email id"
    }
    else {
      console.log("Email Correct");
    }
    return test;
  }

  validatePassword(password) {
    var minNumberofChars = 3;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/;
    var test = regularExpression.test(password)
    if (password.length < minNumberofChars || password.length > maxNumberofChars) {
      return false;
    }
    if (!test) {
      this.signupErrorString = "Password should have atleast one number,one special character and 6 to 16 characters long"
    }
    return test;
  }
  matchPassword() {
    if (!(this.account.password === this.passwordRetyped)) {
      this.signupErrorString = "Passwords should match"
      console.log("Passwords not matching")
      return false;
    }
    return true;
  }
  checkPhoneFormat(phone) {
    /* If phone no starts with a 0 and it is of 11 digits then remove the 0
      eg - 09833319513 becomes 9833319513
    */
    if (phone[0] === "0" && phone.length === 11)
      return phone.slice(1);
    /* If phone no starts with a 91 and it is of 12 digits then remove the 91
      eg - 919833319513 becomes 9833319513
    */
    else if (phone[0] === "9" && phone[1] === "1" && phone.length === 12)
      return phone.slice(2);
    /* If phone no starts with a +91 and it is of 11 digits then remove the +91
      eg - +91833319513 becomes 9833319513
    */
    else if (phone[0] === "+" && phone[0] === "9" && phone[1] === "1" && phone.length === 13)
      return phone.slice(3);
    else
      return phone;
  }
  validatePhone(phone) {
    /* if number starts with a 7,8 or 9 followed by 9 numbers then phone is 
    in valid format
    */
    var re = /^[789][0-9]{9}$/;
    var test = re.test(phone);
    if (!test) {
      console.log("Failed at mobile auth")
      this.signupErrorString = "Please enter a valid phone number"
    } else {
      console.log("Phone Wrong");
    }
    return test;
  }
}
