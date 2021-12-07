import {ImageSizing} from "./ImageSizing";
import {IComment} from "./IComment";


export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    count: number;
    size: ImageSizing;
    weight: string;
    comments: IComment[]
}
