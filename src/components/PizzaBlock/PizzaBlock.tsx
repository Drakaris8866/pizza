import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {addItem, CartItem} from "../../store/cartSlice";
import {Link} from "react-router-dom";
import {RootState, useAppDispatch} from "../../store/store";
import {PizzaItem} from "../../store/pizzasSlice";



const PizzaBlock: FC<PizzaItem> = ({id, title, imageUrl, price, sizes, types}) => {

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    const dispatch = useAppDispatch()


    const pizzasTypes = ["тонкое", "традиционное"]
    const pizzasSizes = [26, 30, 40]

    const currentSize = pizzasSizes[activeSize]
    const currentType = pizzasTypes[activeType]


    const handleAddClick = () => {
        const item: CartItem = {
            id,
            title,
            imageUrl,
            price,
            currentType,
            currentSize,
            count: 0
        }

        dispatch(addItem(item))
    }

    const cartItem = useSelector((state: RootState) => state.cart.items.find((obj => obj.id === id)))

    const addedCount = cartItem ? cartItem.count : 0


    return (
        <div className="pizza-block">
            <Link to={`pizza/${id}`}>
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </Link>
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types.map((typeId, index) => <li key={index}
                                                         className={activeType === index ? "active" : ""}
                                                         onClick={() => setActiveType(index)}>{pizzasTypes[Number(typeId)]}</li>)
                    }
                </ul>
                <ul>
                    {sizes.map((size, index) => <li className={activeSize === index ? "active" : ""}
                                                    onClick={() => setActiveSize(index)} key={size}>{size}</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div onClick={handleAddClick} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{addedCount}</i>
                </div>
            </div>
        </div>);
}
 export default React.memo(PizzaBlock)