import { RowDataPacket } from "mysql2/index";
import { 
    IAuthRequisites, 
    IComment, 
    IImages, 
    IProduct, 
    IProductSearchPayload
} from "@Shared/types";

export interface ICommentEntity extends RowDataPacket {
    comment_id: string;
    name: string;
    email: string;
    body: string;
    product_id: string;
}
export interface IProductEntity extends IProduct, RowDataPacket {
    product_id: string;
}
export interface IProductSearchFilter extends IProductSearchPayload {};
export interface IImageEntity extends RowDataPacket {
    image_id: string;
    product_id: string,
    url: string,
    main: number
}
export interface IProductImageEntity extends RowDataPacket {
    image_id: string;
    url: string;
    product_id: string;
    main: number;
}
export type ProductCreatePayload = Omit<IProduct, "id" | "comments">;
export type CommentCreatePayload = Omit<IComment, "id">;
export type ImageCreatePayload = Omit<IImages, "id">;
export interface IUserRequisitesEntity extends IAuthRequisites, RowDataPacket {
    id: number;
}
export interface ProductAddImagesPayload {
    productId: string;
    images: ImageCreatePayload[];
}
export type ImagesRemovePayload = string[];
