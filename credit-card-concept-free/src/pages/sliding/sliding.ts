import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-sliding',
  templateUrl: 'sliding.html',
})

export class SlidingPage {

  public cards: any;

  constructor(public navCtrl: NavController) {

    this.cards = [
      {
        state: 'ON',
        logo: "assets/img/visa.png",
        a: 1234,
        b: 5522,
        c: 8432,
        d: 2264,
        expires: '7/12',
        bank: 'Bank of America'
      },
      {
        state: 'OFF',
        logo: "assets/img/american.png",
        a: 1234,
        b: 5321,
        c: 8283,
        d: 9271,
        expires: '8/19',
        bank: 'JPMorgan'
      },
      {
        state: 'ON',
        logo: "assets/img/mastercard.png",
        a: 8685,
        b: 2445,
        c: 9143,
        d: 7846,
        expires: '11/23',
        bank: 'CityBank'
      }
    ];

  }

  update(card){
    if(card.state=='ON'){
      card.state = 'OFF'
    }else{
      card.state = 'ON';
    }
  }

}
