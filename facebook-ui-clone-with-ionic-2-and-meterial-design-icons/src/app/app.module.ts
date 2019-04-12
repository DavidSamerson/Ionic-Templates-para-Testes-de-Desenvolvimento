import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NotifyPage } from '../pages/notify/notify';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';

import { StartPage } from '../pages/start/start';

import { SignupPage } from '../pages/signup/signup';


import { SearchPage } from '../pages/search/search';

import { CharlistPage } from '../pages/charlist/charlist';


import { CreateaccountPage } from '../pages/createaccount/createaccount';


import { HTTP } from '@ionic-native/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelpPage,
    NotifyPage,
   ProfilePage,
   StartPage,
   SignupPage,
   CreateaccountPage,
   SearchPage,
   CharlistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      platforms: {
        ios: {
          tabsPlacement: 'bottom',
        }
      }
    }, {}
  )],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelpPage,
    NotifyPage,
    ProfilePage,
    StartPage,
    SignupPage,
    CreateaccountPage,
    SearchPage,
    CharlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler  }
  ]
})
export class AppModule {}
