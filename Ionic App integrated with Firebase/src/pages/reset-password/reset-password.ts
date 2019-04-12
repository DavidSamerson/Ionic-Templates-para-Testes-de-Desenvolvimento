import { Component } from '@angular/core';
import { IonicPage, 
	NavController, 
	NavParams, 
	ToastController, 
	LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

export class User {
    email: string;
}

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

	public user:User = new User();

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public fAuth: AngularFireAuth, 
    private toastCtrl: ToastController, 
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  async resetPassword() {
      //var auth = firebase.auth();
      try {
        var r = await this.fAuth.auth.sendPasswordResetEmail(
        this.user.email,
      );
        console.log('email sent');
        this.emailsent();
        this.presentLoadingText();
      
    }catch (error) {
      if (error.code !== "") {
          if(error.code == "auth/user-not-found"){
            this.authusernotfound();
          }
        console.error(error);
      }

      if (error.code !== "") {
          if(error.code == "auth/invalid-email"){
            this.authinvalidemail();
          }
        console.error(error);
      }

      if (error.code !== "") {
          if(error.code == "auth/invalid-email"){
            this.authargumenterror();
          }
        console.error(error);
      }
    }
  }


  authusernotfound() {
    let toast = this.toastCtrl.create({
      message: 'Email not found',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  authinvalidemail() {
    let toast = this.toastCtrl.create({
      message: 'Enter valid email',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  authargumenterror() {
    let toast = this.toastCtrl.create({
      message: 'Enter valid email',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  emailsent() {
    let toast = this.toastCtrl.create({
      message: 'Password reset email has been sent to your mail',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait a moment...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.setRoot(LoginPage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

}
