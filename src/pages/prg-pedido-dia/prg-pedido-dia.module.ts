import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrgPedidoDiaPage } from './prg-pedido-dia';
import { NavController, Nav } from 'ionic-angular';


@NgModule({
  declarations: [
    PrgPedidoDiaPage,
  ],
  imports: [
    IonicPageModule.forChild(PrgPedidoDiaPage),
  ],
})
export class PrgPedidoDiaPageModule {}
