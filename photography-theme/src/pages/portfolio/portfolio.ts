import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {
	public list:any= [
	{name: 'Emeliy', value: 'assets/imgs/File1.webp'},
	{name: 'John', value: 'assets/imgs/File2.webp'},
	{name: 'Rosey', value: 'assets/imgs/File3.webp'},
	{name: 'Daisy', value: 'assets/imgs/File4.webp'},
	{name: 'Miley', value: 'assets/imgs/File5.webp'},
	{name: 'Eva', value: 'assets/imgs/1.jpeg'},
	{name: 'Rick', value: 'assets/imgs/2.jpeg'},
	{name: 'Helly', value: 'assets/imgs/3.jpeg'}
	];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortfolioPage');
  }

}
