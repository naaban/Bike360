import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddbookPage } from '../addbook/addbook';
import { RenewPage } from '../renew/renew';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  slideData = [{ image: "../../assets/imgs/123.png" },{ image: "../../assets/imgs/123@2x.png" },{ image: "../../assets/imgs/book.jpg" }];

  AddBook(){
    this.navCtrl.push(AddbookPage);
  }
  Renew(){
    this.navCtrl.push(RenewPage);
  }
  Profile(){
    this.navCtrl.push(ProfilePage);
  }
}
