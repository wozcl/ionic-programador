import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObrasDetallesPage } from './obras-detalles';

@NgModule({
  declarations: [
    ObrasDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(ObrasDetallesPage),
  ],
})
export class ObrasDetallesPageModule {}
