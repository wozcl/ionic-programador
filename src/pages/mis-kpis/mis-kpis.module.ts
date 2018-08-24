import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisKpisPage } from './mis-kpis';

@NgModule({
  declarations: [
    MisKpisPage,
  ],
  imports: [
    IonicPageModule.forChild(MisKpisPage),
  ],
})
export class MisKpisPageModule {}
