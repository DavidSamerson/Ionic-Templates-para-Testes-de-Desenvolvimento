import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	user = { name: '', email: '', password: '', photoz: ''};
	public type = 'password';
  public showPass = false;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public fAuth: AngularFireAuth,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) 
  {
  	var user = this.fAuth.auth.currentUser;
		var name, email, photoz, uid, emailVerified;

		if (user != null) {
		  this.user.name = user.displayName;
		  this.user.email = user.email;
		  this.user.photoz = user.photoURL;
		  emailVerified = user.emailVerified;
		  uid = user.uid;
		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  UpdateProfile(){
  	var user = this.fAuth.auth.currentUser;
  	var newPassword = this.user.password;
  	var changeemail = this.user.email;

	user.updateProfile({
	  displayName: this.user.name,
	  photoURL: "https://www.gstatic.com/webp/gallery3/2.png",
	}).then(function() {
	  // Update successful.
	  //this.navCtrl.setRoot(HomePage);
	}).catch(function(error) {
	  // An error happened.
	});

	user.updateEmail(changeemail).then(function() {
	  // Update successful.
	}).catch(function(error) {
	  // An error happened.
    alert(error);
	});

	user.updatePassword(newPassword).then(function() {
	  // Update successful.
	}).catch(function(error) {
	  // An error happened.
	});

	this.presentToast();
  this.presentLoadingText();

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Update successfully',
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
      //content: 'Processing...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.setRoot(HomePage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

}
