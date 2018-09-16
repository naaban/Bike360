import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddbookPage } from '../addbook/addbook';
import { RenewPage } from '../renew/renew';
import { ProfilePage } from '../profile/profile';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  constructor(public navCtrl: NavController , public apiProvider : ApiProvider) {

    this.getData();
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

  getData() {
    this.apiProvider.getData()
    .then(data => {
    this.data = data;
    console.log(this.data);
    });
    }
}
