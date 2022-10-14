import {Categories} from "../Categories";
import {Sort} from "../Sort";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import PizzaLoader from "../PizzaBlock/PizzaLoader";
import React from "react";
import axios from "axios";
import {Context} from "../../App";
import Pagination from "../Pagination";

const Home = () => {

    const [pizzas, setPizzas] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)

    const [activeCategory, setActiveCategory] = React.useState(0)
    const [selectedSortBy, setSelectedSortBy] = React.useState(0)

    const [currentPage, setCurrentPage] = React.useState(1)

    const [searchInputValue] = React.useContext(Context)
    console.log(currentPage)

    React.useEffect(() => {
        axios.get("https://634564d9dcae733e8ff12c3b.mockapi.io/items").then((response) => {
            setPizzas(response.data)
            setLoaded(true)
        })
    }, [])

    React.useEffect(() => {
        categorySort()
    }, [activeCategory, selectedSortBy, searchInputValue, currentPage])

    const fetchSelectedSortBy = () => {
        if (selectedSortBy === 0) {
            return 'sortBy=rating&order=desc'
        } else if (selectedSortBy === 1) {
            return 'sortBy=price&order=desc'
        } else return 'sortBy=title&order=desc'
    }

    const sortCategory = activeCategory === 0 ? 'category' : `category=${activeCategory}`
    const search = searchInputValue ? searchInputValue.toLowerCase() : ''
    const pagination = activeCategory === 0 ? `page=${currentPage}&limit=4&` : ''

    const categorySort = () => {
        setLoaded(false)
        axios.get(`https://634564d9dcae733e8ff12c3b.mockapi.io/items?${pagination}${searchInputValue ? `search=${search}` : `${sortCategory}&${fetchSelectedSortBy()}`}`).then((response) => {
            setPizzas(response.data)
            setLoaded(true)
        })
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
                    <Sort selectedSortBy={selectedSortBy} setSelectedSortBy={setSelectedSortBy}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        loaded ? pizzas.map((pizza, index) => <PizzaBlock
                            key={index + pizza.title} {...pizza}/>) : [...new Array(10)].map((el, index) => <PizzaLoader
                            key={index}/>)
                    }
                </div>
                <Pagination setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
}

export default Home;