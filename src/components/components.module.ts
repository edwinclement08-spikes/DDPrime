import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { BigCardComponent } from './big-card/big-card';
@NgModule({
	declarations: [CardComponent,
    BigCardComponent],
	imports: [],
	exports: [CardComponent,
    BigCardComponent]
})
export class ComponentsModule {}
