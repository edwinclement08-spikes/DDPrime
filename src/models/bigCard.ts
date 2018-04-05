export class BigCardData {
    title: string;
    releaseYear: number;
    duration: string;
    rating: number;
    imgUrl: any;
    genre:string;
    trailerUrl:any;
    description: any;
    comments:any;
    // TODO add cost, icon
    
    

    constructor(title: string, releaseYear: number, duration: string, rating: number, imgUrl: string, genre:string, trailerUrl:string, description:string, comments:any) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.duration = duration;
        this.rating = rating;
        this.imgUrl = imgUrl;
        this.genre = genre;
        this.trailerUrl = trailerUrl;
        this.description = description;
        this.comments = comments;
    }
}
