import { Component } from '@angular/core';
import { NavController, NavParams , ViewController} from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtrl : ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  close()
  {

  	this.viewCtrl.dismiss();

  }

}
