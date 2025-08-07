import { RowDataPacket } from "mysql2/index";

export interface IComment {
    id: string;
    name: string;
    email: string;
    body: string;
    productId: string;
}
export interface IProduct {
    id: string;
    title: string;
    description: string;
    price: number;
    thumbnail?: string;
    comments?: IComment[];
    images?: IImages[];   
}
export interface IImages {
    id: string;
    productId: string;
    main: boolean;
    url: string; 
}
export interface IProductSearchPayload {
    title?: string;
    description?: string;
    priceFrom?: number;
    priceTo?: number;
}
export interface IAuthRequisites {
    username: string;
    password: string;
}
