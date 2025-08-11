import { IAuthRequisites, IComment, IProductImage, IProduct, IProductFilterPayload } from "@Shared/types";
import { RowDataPacket } from "mysql2/index";

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
export interface IProductSearchFilter extends IProductFilterPayload {};
export interface ProductImageEntity extends RowDataPacket {
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
export type ProductCreatePayload = Omit<IProduct, "id" | "comments" | "thumbnail" | "images"> & {
    images: ImageCreatePayload[];
};
export type CommentCreatePayload = Omit<IComment, "id">;
export type ImageCreatePayload = Omit<IProductImage, "id" | "productId">;
export interface IUserRequisitesEntity extends IAuthRequisites, RowDataPacket {
    id: number;
}
export interface ProductAddImagesPayload {
    productId: string;
    images: ImageCreatePayload[];
}
export type ImagesRemovePayload = string[];
export type AddSimilarProductsPayload = [string, string][];
export interface ISimilarProductEntity extends RowDataPacket {
  id: number;
  first_product: string;
  second_product: string;
}
