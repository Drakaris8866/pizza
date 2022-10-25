import PizzaLoader from "../PizzaBlock/PizzaLoader";
import React, {FC} from "react";
import Pagination from "../Pagination";
import {useSelector} from "react-redux";
import qs from 'qs'
import {useNavigate} from "react-router-dom";
import {RootState, useAppDispatch} from "../../store/store";
import {setCategory, setCurrentPage, setFilters, setSortBy} from "../../store/Filter/slice";
import {IParams} from "../../store/Pizza/types";
import {fetchPizzas} from "../../store/Pizza/async";
import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlock from "../PizzaBlock/PizzaBlock";

const Home: FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const warSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const {items, statusOfLoading} = useSelector(({pizzas}: RootState) => pizzas)
    const {activeCategory, sortBy, currentPage} = useSelector(({filter}: RootState) => filter)
    const {searchInputValue} = useSelector(({search}: RootState) => search)

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters({...params}))
            warSearch.current = true
        }
    }, [])

    React.useEffect(() => {
        if (!warSearch.current) {
            getPizzas()
        }
        warSearch.current = false
    }, [activeCategory, sortBy, searchInputValue, currentPage])

    React.useEffect(() => {
        if (isMounted.current) {
            const queryStr = qs.stringify({
                activeCategory,
                sortBy,
                currentPage
            })
            navigate(`?${queryStr}`)
        }
        isMounted.current = true
    }, [activeCategory, sortBy, searchInputValue, currentPage])

    const getPizzas = () => {
        const sortCategory = activeCategory === 0 ? 'category' : `category=${activeCategory}`
        const search = searchInputValue ? searchInputValue.toLowerCase() : ''
        const pagination = activeCategory === 0 ? `page=${currentPage}&limit=6&` : ''

        const fetchSelectedSortBy = () => {
            if (sortBy === 0) {
                return 'sortBy=rating&order=desc'
            } else if (sortBy === 1) {
                return 'sortBy=price&order=desc'
            } else return 'sortBy=title&order=desc'
        }

        const params: IParams = {
            sortCategory,
            search,
            pagination,
            fetchSelectedSortBy,
            searchInputValue
        }
        dispatch(fetchPizzas(params))
    }

    const onChangeCategory = (index: number) => {
        dispatch(setCategory(index))
    }
    const onChangeSortBy = (index: number) => {
        dispatch(setSortBy(index))
    }
    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories onChangeCategory={onChangeCategory} activeCategory={activeCategory}/>
                    <Sort onChangeSortBy={onChangeSortBy} sortBy={sortBy}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        statusOfLoading !== "loading" ? items.map((pizza, index) => <PizzaBlock
                            key={index + pizza.title} {...pizza}/>) : [...new Array(10)].map((el, index) => <PizzaLoader
                            key={index}/>)
                    }
                </div>
                <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
            </div>
        </div>
    );
}

export default Home;