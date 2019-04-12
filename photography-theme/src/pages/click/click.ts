import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the ClickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-click',
 	templateUrl: 'click.html',
 })
 export class ClickPage {
 	public images:any=[];

 	constructor(public navCtrl: NavController, public navParams: NavParams, private camera:Camera,public storage:NativeStorage) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ClickPage');
 		this.loadOffline();
 	}

 	loadOffline(){
 		this.storage.getItem('imageList').then((val)=>{
 			console.log(val);
 			if(val != null){

 				this.images = val;
 			}
 		});
 	}

 	getPicture(){
 		
 		const opt: CameraOptions = {
 			//quality: 50,
 			sourceType: this.camera.PictureSourceType.CAMERA,

 			destinationType: this.camera.DestinationType.DATA_URL,
 			targetWidth:500,
 			targetHeight:500,
 			allowEdit: true
 			//encodingType: this.camera.EncodingType.JPEG,
 			//mediaType: this.camera.MediaType.PICTURE
 		}
 		this.camera.getPicture(opt).then((imageData) => {
 			//console.log(imageData);
 			let base64Image = 'data:image/jpeg;base64,' + imageData;
 			//this.images = base64Image;
 			//alert(base64Image);
 			this.images.push(base64Image);
 			this.storage.setItem('imageList',this.images);
 			//console.log(this.images);

 		}, (err) => {

 		});
 	}
 }
