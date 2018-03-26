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
  passwordRetyped:string;
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
    this.account = {
      name: null,
      email: null,
      password: null,
      phonenumber: null,
      address: null
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
    console.log("Do signup")
    if (account.name && this.validateEmail(account.email) && this.validatePassword(account.password) && this.validatePhone(this.checkPhoneFormat(account.phonenumber)) && account.address && account.address.length > 10
  && account.password===this.passwordRetyped)
      this.user.signup(this.account).subscribe((resp) => {
        this.navCtrl.setRoot(MainPage);
      }, (err) => {
        // Unable to sign up
        let toast = this.toastCtrl.create({
          message: this.signupErrorString,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      });
    else {
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
    if (!test)
      this.signupErrorString = "Please enter a valid email id"
    return test;
  }
  validatePassword(password) {
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.length < minNumberofChars || password.length > maxNumberofChars) {
      return false;
    }
    if (!regularExpression.test(password)) {
      this.signupErrorString = "Password should have atleast one number,one special character and 6 to 16 characters long"
      return false;
    }
  }
  checkPhoneFormat(phone){
    /* If phone no starts with a 0 and it is of 11 digits then remove the 0
      eg - 09833319513 becomes 9833319513
    */ 
    if (phone[0]==="0"&&phone.length===11)
        return phone.slice(1);
    /* If phone no starts with a 91 and it is of 12 digits then remove the 91
      eg - 919833319513 becomes 9833319513
    */ 
    else if (phone[0]==="9"&&phone[1]==="1"&&phone.length===12)
      return phone.slice(2);
    /* If phone no starts with a +91 and it is of 11 digits then remove the +91
      eg - +91833319513 becomes 9833319513
    */ 
    else if (phone[0]==="+"&&phone[0]==="9"&&phone[1]==="1"&&phone.length===13)
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
    if (!test)
      this.signupErrorString = "Please enter a valid phone number"
    return test;
  }
}
