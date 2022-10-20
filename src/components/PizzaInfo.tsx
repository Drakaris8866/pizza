import React, {FC} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Preloader from "./Preloader";

const PizzaInfo: FC = () => {

    const [pizza, setPizza] = React.useState<{
        imageUrl: string,
        title: string,
        price: number
    }>()
    const {id} = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        const fetchPizza = async () => {
            try {
                const {data} = await axios.get(`https://634564d9dcae733e8ff12c3b.mockapi.io/items/${id}`)
                setPizza(data)
            } catch (err) {
                alert("Ошибка при загрузке")
                navigate("/")
            }
        }
        fetchPizza()
    }, [])
    return (
        <div className="container">
            {pizza ?
                <div className="pizza-info__row">
                    <div className="pizza-info__image">
                        <img src={pizza?.imageUrl} alt=""/>
                    </div>
                    <div className="pizza-info__content">
                        <h1 className="pizza-info__title">{pizza?.title}</h1>
                        <h2 className="pizza-info__price">Цена: {pizza?.price} ₽</h2>
                        <h3>Описание:</h3>
                        <p className="pizza-info__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium ad adipisci, aliquam
                            commodi
                            consequatur, distinctio, doloribus esse fugit impedit iste itaque labore minus porro sunt
                            ullam.
                            At
                            id incidunt quia.</p>
                        <h4>Ингридиенты:</h4>
                        <p className="pizza-info__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis,
                            distinctio
                            dolor doloribus et facere fugiat id incidunt maxime minus necessitatibus non quasi quos
                            sapiente
                            sequi voluptatibus! Laboriosam, quas.
                        </p>
                        <Link to="/" className="button button--black pizza-info__btn"><span>Назад</span></Link>
                    </div>
                </div>
                : <Preloader/>
            }
        </div>
    );
};

export default PizzaInfo;
