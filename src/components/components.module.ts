import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { BigCardComponent } from './big-card/big-card';
import { SearchModalComponent } from './search-modal/search-modal';
@NgModule({
	declarations: [CardComponent,
    BigCardComponent,
    SearchModalComponent],
	imports: [],
	exports: [CardComponent,
    BigCardComponent,
    SearchModalComponent]
})
export class ComponentsModule {}
