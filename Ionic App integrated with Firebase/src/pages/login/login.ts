import { Component } from '@angular/core';
import { IonicPage, 
	NavController, 
	NavParams,
	ToastController, 
	AlertController, 
	LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ResetPasswordPage } from '../reset-password/reset-password';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export class User {
    email: string;
    password: string;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user:User = new User();
  myForm
  public type = 'password';
  public showPass = false;

  validation_messages = {
  'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Invalid email address.' },
    ],
    'password': [
      { type: 'minLength', message: 'Password must be at least 6 characters long.' },
      { type: 'pattern', message: 'Your Password must contain Upercase, Lowercase numbers.' },
      { type: 'required', message: 'Password is required.' }
    ],
  }

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public fAuth: AngularFireAuth, 
    public formBuilder: FormBuilder, 
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController, 
    public loadingCtrl: LoadingController,) 
  {
  	this.myForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.presentToast();
        this.presentLoadingText();
      }

    } catch (error) {
        if (error.code !== "") {
          if(error.code == "auth/user-not-found"){
            this.EmailpresentToast();
          }
        console.error(error);

        if(error.code == "auth/wrong-password"){
            this.PasspresentToast();
          }
        console.error(error);
      }
    }
  }

  gotoregister(){
    this.navCtrl.push(RegisterPage)
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Login successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  EmailpresentToast() {
    let toast = this.toastCtrl.create({
      message: 'Email wrong',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  PasspresentToast() {
    let toast = this.toastCtrl.create({
      message: 'password wrong',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage)
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait a moment...'
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
