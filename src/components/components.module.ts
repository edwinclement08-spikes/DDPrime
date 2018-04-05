import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { BigCardComponent } from './big-card/big-card';
import { SearchModalComponent } from './search-modal/search-modal';
import { NumberPadComponent } from './number-pad/number-pad';
import { ListCardComponent } from './list-card/list-card';

@NgModule({
	declarations: [CardComponent,
    BigCardComponent,
    SearchModalComponent,
    ListCardComponent],
	imports: [],
	exports: [CardComponent,
    BigCardComponent,
    SearchModalComponent,
    ListCardComponent]
})
export class ComponentsModule {}
