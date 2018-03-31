export class ItemData {
    title: string;
    releaseYear: number;
    duration: string;
    rating: number;
    imgUrl: any;
    genre: string;
    trailerUrl: any;
    description: any;
    comments: any;
    cost: number;
    timing_start:any;
    timing_end:any;
    itemCode:any;
    channel_id:any;
    channel_name:any;
    
    // TODO add cost, icon
 
    // TODO add an update ability
 
    saveData()  {
        // 
    }
    // title: string, releaseYear: number, duration: string, rating: number, imgUrl: string, genre: string, trailerUrl: string, description: string, comments: any
    constructor(data) {
        this.title = data.title;
        this.releaseYear = data.releaseYear;
        this.duration = data.duration;
        this.rating = data.rating;
        this.imgUrl = data.icon;
        this.genre = data.genre;
        this.trailerUrl = data.trailerUrl;
        this.description = data.description;
        this.comments = data.comments;
        this.cost = data.cost;
        this.timing_start = data.timing_start;
        this.timing_end = data.timing_end;
        this.itemCode = data.itemCode;
        this.channel_id = data.channel_id;
        this.channel_name = data.channel_name;
    }
}
 