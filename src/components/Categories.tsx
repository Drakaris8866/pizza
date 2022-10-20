import React, {FC} from "react";

type CategoriesProps = {
    activeCategory: number,
    onChangeCategory: (index: number) => void
}

export const Categories:FC<CategoriesProps> = ({activeCategory, onChangeCategory}) => {

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
                categories.map((category, index) => <li key={index + category} onClick={() => onChangeCategory(index)}
                                                        className={activeCategory === index ? "active" : ''}>{category}</li>)
            }
        </ul>
    </div>;
}