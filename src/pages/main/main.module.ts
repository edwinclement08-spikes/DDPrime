import { BigCardComponent } from './../../components/big-card/big-card';
import { CardComponent } from './../../components/card/card';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { MainPage } from './main';


@NgModule({
  declarations: [
    MainPage,
    CardComponent,
    BigCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
