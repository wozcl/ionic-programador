import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KpisDetallesPage } from './kpis-detalles';

@NgModule({
  declarations: [
    KpisDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(KpisDetallesPage),
  ],
})
export class KpisDetallesPageModule {}
