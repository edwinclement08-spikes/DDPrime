import { ItemData } from './../../models/itemData';
import { ListItemsProvider } from './../../providers/list-items/list-items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { MovieDetailsPage } from '../movie-details/movie-details';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  genres: any = [
    'All', 'Fiction', 'Comedy', 'Education', "Classic"
  ];
  currentItems: any = [];
  listItems: any;
  currentGenre: any;

  listCardData: ItemData[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public listItemsProvider: ListItemsProvider) {
    // constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,  public listItemsProvider:ListItemsProvider) { 
    // console.log("sfsfe");
    
    // console.log("sfsfe1");
    this.listCardData = [];
    this.currentGenre = 'All';
    this.listItemsProvider.getItems().then((data) => { this.initArray(data) });
    
  }

  initArray(datax) {
    let x: any;
    for (x in datax) {
      let data = datax[x];

      this.listCardData.push(new ItemData(data));
    }
  }

  genreSelected(genre) {
    this.currentGenre = genre;

    if(genre == 'All')  {
      this.currentItems = this.listCardData; 
      return; 
    }
    this.currentItems = [];
    var i;
    for (i = 0; i < this.listCardData.length; i++) {
      if (this.listCardData[i].genre == this.currentGenre) {
        this.currentItems.push(this.listCardData[i]);
      }
    }

  }

  ngOnInit() {
    this.listItemsProvider.getItems().then((data) => { this.initArray(data) });

  }

  openPage(data) {
    this.navCtrl.push(MovieDetailsPage, {
      param1: data,
    });
  }

  refreshItemList(ev) {
    let val = ev.target.value.trim();
    if (!val) {
      this.currentItems = this.listCardData;
      return;
    } else {
      this.currentItems = this.query({
        title: val
      });
    }
  }

  query(params?: any) {
    if (!params) {
      return this.listCardData;
    }

    return this.listCardData.filter((item) => {
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
