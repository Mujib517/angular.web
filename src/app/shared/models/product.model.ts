import { Review } from "./review.model";

export class Product {
    _id: string;
    brand: string;
    model: string;
    price: number;
    lastUpdated: Date;
    inStock: boolean;
    reviews:Review[]
}

//simple
//fast
//no web calls , db calls
//independent
//no flaky 