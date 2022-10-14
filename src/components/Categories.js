import React from "react";

export function Categories({activeCategory, setActiveCategory}) {

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
                categories.map((category, index) => <li key={index + category} onClick={() => setActiveCategory(index)} className={activeCategory === index ? "active" : ''}>{category}</li>)
            }
        </ul>
    </div>;
}