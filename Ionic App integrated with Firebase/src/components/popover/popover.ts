import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../../pages/profile/profile';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(public navCtrl: NavController, 
  	public viewCtrl: ViewController, 
  	public fAuth: AngularFireAuth) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';
  }

  close() {
    this.viewCtrl.dismiss();
  }

  logout() {
    this.fAuth.auth.signOut();
    this.navCtrl.push(LoginPage);
    this.viewCtrl.dismiss();
  }

  gotoprofile(){
    this.navCtrl.push(ProfilePage);
    this.viewCtrl.dismiss();
  }

}
