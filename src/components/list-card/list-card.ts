import { ItemData } from './../../models/itemData';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ListCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-card',
  templateUrl: 'list-card.html'
})
export class ListCardComponent {
  name: string;
  @Input() data: ItemData;

  constructor(public sanitizer: DomSanitizer) {
    console.log(' ListCardComponent Component');

  }
  ngOnInit() {
    console.log(' ListCardComponent C  ngOnInit');

    this.name = JSON.stringify(this.data);

    this.data.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.imgUrl);

  }

}
