export class BigCardData {
    title: string;
    releaseYear: number;
    duration: string;
    rating: number;
    imgUrl: string;
    genre:string;

    constructor(title: string, releaseYear: number, duration: string, rating: number, imgUrl: string, genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.duration = duration;
        this.rating = rating;
        this.imgUrl = imgUrl;
        this.genre = genre;
    }
}
