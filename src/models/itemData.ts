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
    }
}
 