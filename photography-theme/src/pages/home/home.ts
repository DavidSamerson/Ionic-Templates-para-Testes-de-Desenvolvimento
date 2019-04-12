import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public liked1:boolean=false;
	public list:any= [
	{value: 'assets/imgs/File1.webp', liked: false},
	{value: 'assets/imgs/File2.webp',liked: false},
	{value: 'assets/imgs/File3.webp',liked: false},
	{value: 'assets/imgs/File4.webp',liked: false},
	{value: 'assets/imgs/File5.webp',liked: false},
	{value: 'assets/imgs/1.jpeg',liked: false},
	{value: 'assets/imgs/2.jpeg',liked: false},
	{value: 'assets/imgs/3.jpeg',liked: false}
	];
	
	constructor(public navCtrl: NavController) {

	}

	enterWebsite(){
		this.navCtrl.push('HomePage');
	}

	like(no){
		
		if(this.liked1){
			this.liked1 = false;
		}else{
			this.liked1 = true;
		}
	}

	showPortfolio(){
		this.navCtrl.push('PortfolioPage');
	}
}
