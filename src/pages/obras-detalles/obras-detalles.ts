import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { MisObrasPage } from '../mis-obras/mis-obras';
import { AgregarProgramadorPage } from '../agregar-programador/agregar-programador';
import { EliminarProgramadorPage } from '../eliminar-programador/eliminar-programador';

/**
 * Generated class for the ObrasDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obras-detalles',
  templateUrl: 'obras-detalles.html',
})
export class ObrasDetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(false, 'MenuGestionObra');
 	this.menuCtrl.enable(true, 'MenuPrincipal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObrasDetallesPage');
  }

 goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }

  goBack(params){
    if (!params) params = {};	
    this.navCtrl.push(MisObrasPage);
  }

  goEliminarProgramador(params){
   	if (!params) params = {};	
    this.navCtrl.push(EliminarProgramadorPage);
  }

  goAgregarProgramador(params){
   	if (!params) params = {};	
    this.navCtrl.push(AgregarProgramadorPage);
  }

}





