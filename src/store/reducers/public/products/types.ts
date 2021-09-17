export interface Product {
    id: number;
    imageUrl: string;
    name: string;
    count: number;
    size: ImageSizing;
    weight: string;
    comments: Comment[]
}

export interface Comment {
    id: number;
    productId: number;
    date: string;
    description: string;
}

export  interface ImageSizing {
    width: number;
    height: number;
}