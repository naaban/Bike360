import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;

  constructor(public navCtrl: NavController,private statusBar: StatusBar, public navParams: NavParams,public viewCtrl:ViewController,public loadingCtrl:LoadingController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushPage() {
    this.navCtrl.push(RegisterPage);

  }
  login(){
    // this.navCtrl
    // .push(HomePage)
    // .then(() => {
    //   const index = this.viewCtrl.index;
    //   this.navCtrl.remove(index);
    // });

    this.presentLoadingCustom();

  }

  presentLoadingCustom() {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<div class="row"><div class="block"><div class="lds-css ng-scope"><div  class="lds-wedges"><div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div></div></div><div class="block text"><text-area>Loging in.. Please Wait..</text-area></div>`,
      duration: 5000
    });
    this.loading.onDidDismiss(() => {
      this.navCtrl.setRoot(HomePage);
    });

    this.loading.present();


}
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.backgroundColorByHexString('#ffffff');
}
