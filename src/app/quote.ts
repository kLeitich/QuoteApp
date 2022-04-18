export class Quote {
    public upvotes:number
    public downvotes:number
    showDescription: boolean;
    constructor(public description:string,public author:string,public postBy:string){
        this.showDescription=false;
        this.upvotes =0;
        this.downvotes =0;
    
    }
    
    
    

}
