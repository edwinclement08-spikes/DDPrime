import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListItemsProvider {
  items: { name: string, id: string }[];
  constructor(public http: HttpClient) {
    console.log('Hello ListItemsProvider Provider');

    this.items = [
      { name: "Iron Man", id: "12345" },
      { name: "Avengers", id: "28917" },
      { name: "Captain America", id: "65733" },
      { name: "Transformers", id: "38562" },
    ];
    console.log(' ListItemsProvider init');
    
  }
  getItems()  {
    console.log("temp test listprovider")
    return this.items;
  }

}
