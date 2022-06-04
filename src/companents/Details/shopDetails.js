import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, getProdDetail, getProdList} from "../../redux/action/action";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BooksCard from "../card/booksCard";
import Slider from "react-slick";

const ShopDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {shopProductDetail: prodDetail} = useSelector(s => s)
    const {shopProductList: product} = useSelector(s => s)

    const {basket} = useSelector(s => s)
    const basketItems = basket.some(basket => basket.id === prodDetail.id)

    useEffect(() => {
        window.scroll(0,0)
        dispatch(getProdDetail(id))
        dispatch(getProdList())
    }, [])

    const categorySettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="container mx-auto">
                <div className="py-20">
                    <div className=" flex justify-around">
                        <img src={prodDetail.image} alt="image"
                             className="w-96 h-[50%] object-cover rounded-md"/>
                        <div className="w-[50%]">
                            <h1 className="text-3xl font-medium w-9/12 py-5">{prodDetail.title}</h1>
                            <p className="w-full py-8">Цена: {prodDetail.price} сом</p>
                            <p className="w-full py-8">Описание: {prodDetail.description}</p>
                 <div className="flex">
                     {
                         basketItems ? <button
                             className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                             <FontAwesomeIcon icon={faCheck}/>Добавлено</button> : <button
                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                             onClick={() => dispatch(addToBasket(prodDetail))}
                         > добавить в корзину</button>
                     }
                 </div>
                     <div className="flex my-5">
                         <NavLink to="/basket">
                             <button
                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                 onClick={() => dispatch(addToBasket(prodDetail))}
                             >Купить сейчас</button>
                         </NavLink>
                     </div>

                        </div>
                    </div>

                    <div>

                        <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold">Возможно, Вам понравится</h1>

                        <Slider
                            {...categorySettings}>
                            {
                                product.map(el => (
                                    <div key={el.id}>
                                        <BooksCard el={el} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;