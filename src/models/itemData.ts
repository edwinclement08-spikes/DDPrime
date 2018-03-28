export class ItemData {
    data:{title:string,releaseYear: number,duration: string,rating: number,imgUrl: any,genre: string,trailerUrl: any,description: any,comments: any} ;


    // TODO add cost, icon

    // TODO add an update ability

    saveData() {
        // 
    }
    // title: string, releaseYear: number, duration: string, rating: number, imgUrl: string, genre: string, trailerUrl: string, description: string, comments: any
    constructor(data) {
        this.data.title = data.title;
        this.data.releaseYear = data.releaseYear;
        this.data.duration = data.duration;
        this.data.rating = data.rating;
        this.data.imgUrl = data.imgUrl;
        this.data.genre = data.genre;
        this.data.trailerUrl = data.trailerUrl;
        this.data.description = data.description;
        this.data.comments = data.comments;
    }
}