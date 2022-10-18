import React from "react";
import {setCategory} from "../store/filterSlice";

export function Categories({activeCategory, dispatch}) {

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return <div className="categories">
        <ul>
            {
                categories.map((category, index) => <li key={index + category} onClick={() => dispatch(setCategory(index))} className={activeCategory === index ? "active" : ''}>{category}</li>)
            }
        </ul>
    </div>;
}