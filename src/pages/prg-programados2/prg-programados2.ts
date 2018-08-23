import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MdlProgramacionPage } from '../mdl-programacion/mdl-programacion';
import { PrgProgramadosPage } from '../prg-programados/prg-programados';


/**
 * Generated class for the PrgProgramados2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prg-programados2',
  templateUrl: 'prg-programados2.html',
})
export class PrgProgramados2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrgProgramados2Page');
  }

   goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(MdlProgramacionPage);
  }
  
  goToTab1(params){
    if (!params) params = {};
    this.navCtrl.push(PrgProgramadosPage);
  }

  goToTab2(params){
    if (!params) params = {};
    this.navCtrl.push(PrgProgramados2Page);
  }

  goToTab3(params){
    if (!params) params = {};
    this.navCtrl.push(PrgProgramadosPage);
  }
}
