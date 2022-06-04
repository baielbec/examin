import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../images/image 160 (Traced).svg"
const Header = () => {
    return (
        <div className="bg-[#010049] ">
            <div className="container">
                <div className="flex justify-around">
                    <Link to={"/"}
                          className="py-2 text-white font-medium text-3xl">BOOKShop</Link>
                    <Link to={'/shop-basket'}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <img src={Logo} alt=""/></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;