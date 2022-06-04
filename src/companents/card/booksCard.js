import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {addToBasket, getCategoryList, getProdDetail, getProdList} from "../../redux/action/action";

const BooksCard = ({el}) => {
    const  {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategoryList())
        dispatch(getProdDetail(id))
        dispatch(getProdList())
    })
    const {basket} = useSelector(s => s)
    const basketItems = basket.some(basket => basket.id === el.id)
    return (
        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 my-5 text-center flex justify-center" key={el.id}>
            <div className="sm:px-2 py-2  md:px-2 py-3 lg:px-3 py-5 xl:px-5 py-5 text-gray-100 bg-white px-4 py-4 rounded-md body-font shadow-black bg-black-500 shadow-lg shadow-black-500/100  mx-3">
                <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/shop-details/${el.id}`}>
                        <img src={el.image} alt="image"
                             className="w-60 h-96 object-cover rounded-md"/>
                    </Link>
                    <div className="px-5 pb-5">
                        <a href="src/companents/card/booksCard#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{el.title.slice(100)}</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">Цена: {el.price}сом</span>
                        </div>
                        {
                            basketItems ?
                                <Link to='/shop-basket'>
                                    <FontAwesomeIcon
                                        className="text-[#010049] w-7 h-7 cursor-pointer"
                                        icon={faCheck}/>
                                </Link>
                                :
                                <FontAwesomeIcon
                                    onClick={() => dispatch(addToBasket(el))}
                                    className="text-[#010049] w-7 h-7 cursor-pointer"
                                    icon={faShoppingCart}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;


// Add to cart