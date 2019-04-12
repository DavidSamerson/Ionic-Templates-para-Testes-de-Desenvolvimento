import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { NavController ,PopoverController ,ViewController  } from 'ionic-angular';
import {Http ,Headers , RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

//search component

import { SearchPage } from '../search/search';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  User : string ;

  Pwd  : string ;

  list :any;

  search :any;


  constructor(public navCtrl: NavController  , public http : Http ,public popoverCtrl: PopoverController) {

this.http = http;
this.list = ["Sakthi","Usha"];

this.search = SearchPage ;

  }

  //show pop over
  presentPopover() {
    let popover = this.popoverCtrl.create(ProfilePage);
    popover.present();
  }



  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.list.push( this.list.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 300);
  }



}
