import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { BigCardComponent } from './big-card/big-card';
import { SearchModalComponent } from './search-modal/search-modal';
import { NumberPadComponent } from './number-pad/number-pad';

@NgModule({
	declarations: [CardComponent,
    BigCardComponent,
    SearchModalComponent,
    NumberPadComponent,
    NumberPadComponent],
	imports: [],
	exports: [CardComponent,
    BigCardComponent,
    SearchModalComponent,
    NumberPadComponent,
    NumberPadComponent]
})
export class ComponentsModule {}
