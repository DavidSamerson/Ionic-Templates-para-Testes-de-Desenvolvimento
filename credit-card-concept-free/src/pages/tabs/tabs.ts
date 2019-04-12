import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PrivatePage } from '../private/private';
import { DarkPage } from '../dark/dark';
import { MinimalPage } from './../minimal/minimal';
import { SlidingPage } from './../sliding/sliding';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PrivatePage;
  tab3Root = DarkPage;
  tab4Root = MinimalPage;
  tab5Root = SlidingPage;
  tab6Root = ContactPage;

  constructor() {

  }
}
