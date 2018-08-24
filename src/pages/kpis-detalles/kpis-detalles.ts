import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { MisKpisPage } from '../mis-kpis/mis-kpis';
import { Chart } from 'chart.js';

/**
 * Generated class for the KpisDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kpis-detalles',
  templateUrl: 'kpis-detalles.html',
})
export class KpisDetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(false, 'MenuGestionObra');
 	this.menuCtrl.enable(true, 'MenuPrincipal');
  }
  
    @ViewChild('barCanvas') barCanvas;
	barChart: any; 
    @ViewChild('barCanvas2') barCanvas2;
	barChart2: any; 
    @ViewChild('barCanvas3') barCanvas3;
	barChart3: any; 

  ionViewDidLoad() {
    console.log('ionViewDidLoad KpisDetallesPage');

 	this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'horizontalBar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
  	

  	this.barChart2 = new Chart(this.barCanvas2.nativeElement, {
 
            type: 'horizontalBar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [10, 11, 13, 25, 12, 31],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
  	
  	var data = {
			  labels: ["Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado"],
			  datasets: [{
			    label: "Utilizado",
			    backgroundColor: 'rgba(255, 99, 132, 0.2)',
			    borderColor: 'rgba(255,99,132,1)',
			    data: [3,4,5,8,6,7]
			  }, {
			    label: "Modificado",
			    backgroundColor: 'rgba(54, 162, 235, 0.2)',
			    borderColor: 'rgba(54, 162, 235, 1)',
			    data: [4, 3, 5,4,8,9]
			  }, {
			    label: "Anulado",
			    backgroundColor: 'rgba(255, 99, 132, 0.2)',
			    borderColor: 'rgba(255, 159, 64, 1)',
			    data: [7, 2, 6,4,5,3]
			  }]
			};
  	this.barChart3 = new Chart(this.barCanvas3.nativeElement, {
 
            type: 'horizontalBar',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
  	
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }



  goBack(params){
    if (!params) params = {};	
    this.navCtrl.push(MisKpisPage);
  }
}
