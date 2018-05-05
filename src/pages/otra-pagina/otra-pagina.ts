import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtraPaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-otra-pagina',
  templateUrl: 'otra-pagina.html',
})
export class OtraPaginaPage {
datos:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datos = JSON.parse(this.navParams.get('datos'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtraPaginaPage');
    console.log(this.datos);
  }

}
