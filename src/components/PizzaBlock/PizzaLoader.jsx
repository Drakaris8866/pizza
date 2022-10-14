import React from "react"

import ContentLoader from "react-content-loader"

const PizzaLoader = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={450}
        viewBox="0 0 280 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="pizza-block"
    >
        <circle cx="120" cy="120" r="120"/>
        <rect x="0" y="250" rx="0" ry="0" width="280" height="20"/>
        <rect x="0" y="280" rx="0" ry="0" width="280" height="80"/>
        <rect x="0" y="374" rx="0" ry="0" width="90" height="64"/>
        <rect x="98" y="374" rx="0" ry="0" width="184" height="64"/>
    </ContentLoader>
)

export default PizzaLoader