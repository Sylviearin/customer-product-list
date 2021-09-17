import {Product} from "../store/reducers/public/products/types";

export const mockData: Product[] =  [
    {
        id: 1,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Cabbage',
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 1,
                description: 'some text here',
                date: "14:00 22.08.2021",
            },
            {
                id: 2,
                productId: 1,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 1,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 2,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Pineapple',
        count: 42,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 2,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 2,
                productId: 2,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 2,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 3,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Apple',
        count: 2,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 3,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 2,
                productId: 3,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 3,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 4,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Kiwi',
        count: 0,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 4,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 2,
                productId: 4,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 4,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 5,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Tomato',
        count: 0,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 5,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 2,
                productId: 5,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 5,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 6,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Cucumber',
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 6,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 2,
                productId: 6,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 6,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 7,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Mango',
        count: 23,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 7,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
    {
        id: 8,
        imageUrl: 'https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg',
        name: 'Cranberries',
        count: 400,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
                id: 1,
                productId: 8,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
            {
                id: 3,
                productId: 8,
                description: 'some text here',
                date: "14:00 22.08.2021"
            },
        ]
    },
];
export const storageData: string = 'productData';
