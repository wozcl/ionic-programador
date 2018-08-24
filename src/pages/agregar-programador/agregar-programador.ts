import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ObrasDetallesPage } from '../obras-detalles/obras-detalles';

@IonicPage()
@Component({
  selector: 'page-agregar-programador',
  templateUrl: 'agregar-programador.html',
})
export class AgregarProgramadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public menuCtrl: MenuController) {
	  	this.menuCtrl.enable(false, 'MenuGestionObra');
	 	this.menuCtrl.enable(true, 'MenuPrincipal');
 	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarProgramadorPage');
  }
  	goToPrincipal(params){
	    if (!params) params = {};
	    this.navCtrl.push(PrincipalPage);
	}
	goBack(params){
	    if (!params) params = {};	
	    this.navCtrl.push(ObrasDetallesPage);
	}	
}
