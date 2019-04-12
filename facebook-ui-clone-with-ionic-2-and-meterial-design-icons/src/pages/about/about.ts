import { Component } from '@angular/core';
import { NavController ,LoadingController} from 'ionic-angular';
import {Http ,Headers , RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

// Sample JSON :https://www.reddit.com/r/pics.json

export class AboutPage {

TestString : string ="Hello Ionic";
post:any ;

hello : string ;
bright : any ;


  constructor(public navCtrl: NavController , public http : Http ,public load:LoadingController  )
   {
  
   this.http = http;
   this.httpinit();
  }

    

  doInfinite(infiniteScroll)
  {
     console.log('Begin async operation');

  }






//init httpGet
  httpinit()
  {
     let loader = this.load.create({
      content: "Please wait..."
      
    });
    loader.present();
  console.log("function works for me");
      this.http.get('http://smartronics.in/ionic/fetchAllAbsent.php')
      .map(res => res.json()).subscribe (data => {
       this.post=data.result;
       loader.dismiss();


    });   

// close httpGet 
    
}


 


//httppost

//http://smartronics.in/ionic/demotestServerResponse.php
//http://smartronics.in/ionic/fetchAllAbsent.php
  /*postRequest() {

  console.log("Ready For Posting");

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    let options = new RequestOptions({ headers: headers });

    let postParams = JSON.stringify({
      title: 'foo',
      body: 'bar',
      username: 'sakthivel'
    });

    let postData = 'username=sakthivel'
    
    this.http.post("http://smartronics.in/ionic/test.php", postData, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  }*/



}// ts closed
