import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NotifyPage } from '../notify/notify';
import { HelpPage } from '../help/help';
import { ProfilePage } from '../profile/profile';
import { CharlistPage } from '../charlist/charlist';



import { NavController, NavParams ,MenuController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  hide : boolean = true;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root:  any= NotifyPage 
  tab5Root: any = HelpPage;
  tab6Root:  any=  ProfilePage;
  tab7Root: any =  CharlistPage;

  constructor(public navCtrl: NavController, public navParams: NavParams , public menuCtrl: MenuController) {

  }

 
}