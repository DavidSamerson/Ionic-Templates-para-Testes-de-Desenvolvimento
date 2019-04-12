import { Component } from '@angular/core';
import { NavController, NavParams  ,ModalController} from 'ionic-angular';

import { SignupPage } from '../signup/signup';

/*
  Generated class for the Start page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public modalCtrl:ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  loadSignUp()
  {
  	console.log('signup fired');

  }

  loadSignUpModal()
  {
  	//login and signup form field 
   let profileModal = this.modalCtrl.create(SignupPage , { userId: 8675309 });
   profileModal.present();

  }

  loadCreateAccount()
  {
  	//create account
  	 let profileModal = this.modalCtrl.create(SignupPage , { userId: 8675309 });
   profileModal.present();

  }



}
