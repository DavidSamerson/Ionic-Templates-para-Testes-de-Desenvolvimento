import { Component } from '@angular/core';
import { NavController, NavParams ,MenuController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

/*
  Generated class for the Notify page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html'
})
export class NotifyPage {

  prfPage:any;

	items : any = ['One', 'Two ' ,'One', 'Two ','One', 'Two ','One', 'Two ','One', 'Two ','One', 'Two ','One', 'Two ','One', 'Two ' ];

  constructor(public navCtrl: NavController, public navParams: NavParams , public menuCtrl:MenuController) {this.prfPage =ProfilePage;}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
  }

  //virtual scroll
  myHeaderFn(record, recordIndex, records) 
{
  if (recordIndex % 20 === 0) 
  {
    return 'Header ' + recordIndex;
  }
  return null;
}

//ioninfinite

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }



  //open menu
  openMenu() {
   this.menuCtrl.open();
 }

}
