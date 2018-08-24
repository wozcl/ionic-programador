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
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionObraPage');
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, { 
        type: 'doughnut',
        options: {
        legend: {
            display: false,               
        },
        elements: {
        center: {
          text: '90%',
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20 // Defualt is 20 (as a percentage)
        }
    },
     },
        data: {
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            labels: ["Entregados", "Pendientes"],
            datasets: [{
                label: '# of Votes',
                data: [45, 135],
                /*                   
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',                     
                    'rgba(255, 99, 132, 0.2)',
                ],
                */

                 borderColor :[
                  "#03334f",
                  "#03334f",                  
                ],

                backgroundColor: [
                                       
                    'green',
                    'black',
                ],

                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                                           
                ]
            }]
        } 
    });
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }


  }

  


   
