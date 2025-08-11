import { Link } from "react-router-dom";
import { IProduct } from "@Shared/types";
import { FunctionComponent } from "react";
import "./ListItem.css";

interface ListItemProps {product: IProduct;}
const ListItem: FunctionComponent<ListItemProps> = ({ product }) => {
  const { id, title, price, thumbnail, images, comments } = product;
  return (
    <li className="listItem">
      <div className="linkWrapper">
        <Link className="link" to={`/${id}`}>
          <h2 className="title">{title}</h2>
        </Link>
        <Link className="link" to={`/${id}`}>
          <img
            className="img"
            src={thumbnail ? thumbnail.url : "/product-placeholder.png"}
            alt="product image"
          />
        </Link>
      </div>
      <p className="price">{price} &#8381;</p>
      <p className="images">Images: {images?.length || 0}</p>
      <p className="comments">Product Comments: {comments?.length || 0}</p>
    </li>
  );
};
export default ListItem;
