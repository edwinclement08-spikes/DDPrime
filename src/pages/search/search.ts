import { ListItemsProvider } from './../../providers/list-items/list-items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  listItems:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public listItemsProvider:ListItemsProvider) { 
    // constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,  public listItemsProvider:ListItemsProvider) { 
    console.log("sfsfe");
    this.listItems = listItemsProvider.getItems();
    console.log("sfsfe1");
  }


  refreshItemList(ev) {
    let val = ev.target.value.trim();
    if(!val) {
      this.currentItems = [];
      return;
    } else {
      this.currentItems = this.query({
        name: val
      });
    }
  }

  query(params?: any) {
    if (!params) {
      return this.listItems;
    }

    return this.listItems.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
