import { Component } from '@angular/core';
import { NavController, NavParams  ,ViewController , ModalController } from 'ionic-angular';

import { CreateaccountPage } from '../createaccount/createaccount';
import { HomePage } from '../home/home';

/*

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
 Dashboard : any;

 loginUser : string;
 loginPwd   : string;
 

  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl: ViewController ,public modalCtrl:ModalController  ) 
  {

    this.Dashboard = HomePage;
    this.loginPwd ="";
    this.loginUser = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  fboAuth()
  {
    console.log(this.loginPwd);
    console.log(this.loginUser);
  }
  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

 loadCreateAccount()
  {
  	//create account
  	let createaccount = this.modalCtrl.create(CreateaccountPage , { userId: 8675309 });
   createaccount.present();

  }

  pushHome()
  {
    console.log("push of home page");
     this.navCtrl.push(this.Dashboard);

  }


}



