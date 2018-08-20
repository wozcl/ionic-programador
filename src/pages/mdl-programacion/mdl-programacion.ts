import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the MdlProgramacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mdl-programacion',
  templateUrl: 'mdl-programacion.html',
})


export class MdlProgramacionPage {
  @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MdlProgramacionPage');
  }

  goHome(){
    this.nav.setRoot(PrincipalPage)
  }


  }

  


   
