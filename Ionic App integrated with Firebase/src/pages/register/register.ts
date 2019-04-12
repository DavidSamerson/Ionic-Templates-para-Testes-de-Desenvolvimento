import { Component } from '@angular/core';
import { IonicPage, 
	NavController, 
	NavParams,
	ToastController, 
    AlertController, 
    LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { FormBuilder, 
         FormGroup, 
         Validators, 
         FormControl } from '@angular/forms';

export class User {
    email: string;
    password: string;
    displayName: string;
}

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	public user:User = new User();
  	myForm;
  	firebase_id = { firebase_id_var: '' };

  //form validation_messages
  validation_messages = {
    'displayName': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minLength', message: 'Username must be at least 6 characters long.' },
    ],
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

  public type = 'password';
  public showPass = false;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public fAuth: AngularFireAuth, 
    public formBuilder: FormBuilder, 
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) 
  {
  	this.myForm = this.formBuilder.group({
      displayName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      ).then((newUser:any) => {
          console.log('email',this.user.email);
          //console.log(newUser.user.uid)
          console.log("Successfully registered!");

          var user = this.fAuth.auth.currentUser;

          user.updateProfile({
            displayName: this.user.displayName,
            photoURL: "https://www.gstatic.com/webp/gallery3/2.png"
          }).then(function() {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });

          this.presentToast();
          this.presentLoadingText();

        });

    }catch (error) {
        if (error.code !== "") {
          if(error.code == "auth/email-already-in-use"){
            let alert = this.alertCtrl.create({
              title: 'Email Exists',
              subTitle: 'The email you entered is already registered.',
              buttons: ['Retry']
            });

            alert.present();
          }
        console.error(error);
      }
    }
  }

  gotologin(){
    this.navCtrl.push(LoginPage)
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'SugnUp successfully',
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
      //this.navCtrl.push(LoginPage);
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
