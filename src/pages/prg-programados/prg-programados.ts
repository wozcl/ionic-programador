import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PrincipalPage } from '../principal/principal';
import { MdlProgramacionPage } from '../mdl-programacion/mdl-programacion';
import { PrgProgramados2Page } from '../prg-programados2/prg-programados2';


/**
 * Generated class for the PrgProgramadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prg-programados',
  templateUrl: 'prg-programados.html',
})
export class PrgProgramadosPage { 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrgProgramadosPage');
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
