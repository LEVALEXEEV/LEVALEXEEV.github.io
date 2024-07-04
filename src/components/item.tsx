import { Link } from "react-router-dom";
import { ItemType } from "../types/item";

function Item({previewImages, type, article, title, price}: ItemType): JSX.Element {
    return (
        <article className="stuff__card">
            <div className="card__image-wrapper">
                <Link to={`/item/${article}`}>
                    <img className="card__image" src={'img/items/'+ previewImages[0]} width="300"  alt="Place image" />
                </Link>
            </div>
            <div className="card__info">
                <p className="card__type">{type}</p>
                <h2 className="card__name">
                    <Link to={`/item/${article}`}>{title}</Link>
                </h2>
                <div className="card__price-wrapper">
                    <div className="card__price">
                        <b className="card__price-value">{price}</b>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item
