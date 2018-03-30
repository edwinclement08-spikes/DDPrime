import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ListItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListItemsProvider {
  items:any = null;
  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello ListItemsProvider Provider');

    // this.items = [
    //   { name: "Iron Man", id: "12345" },
    //   { name: "Avengers", id: "28917" },
    //   { name: "Captain America", id: "65733" },
    //   { name: "Transformers", id: "38562" },
    // ];
    console.log(' ListItemsProvider init');
    
    
  }
  getItems()  {
    return new Promise((resolve, reject)  => {
      if(!this.items) {
        this.api.get("getItems").subscribe((data) => {this.items = data; resolve(data)});
      } else {
        resolve(this.items);
      }
    });
  }

  ngOnInit()  {
    console.log("I am Indeed called.");
    this.api.get("getItems").subscribe((data) => {this.items = data});
    
  }

}
