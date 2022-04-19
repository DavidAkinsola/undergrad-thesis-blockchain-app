import {React, useState} from "react";
import {Link} from "react-router-dom"

import logo from '../../images/apt-logo.png';


const Navigation = () => {
    //const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-2 transaction-navbar">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer bg-cover display-content" />
            </div>

            <ul className="flex list-none flex-row justify-between items-center flex-initial cgothic">
                <Link to="/" 
                    className="mx-4 cursor-pointer text-black hover:text-[#fff]">
                    Home
                </Link>

                <Link to="/dashboard" 
                    className="mx-4 cursor-pointer text-black hover:text-[#fff] ">
                        Dashboard
                </Link>

                <Link to="/logreg" 
                    className="text-white md:text-base text-xs bg-[#000000] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#333]">
                        Sign In
                </Link>
                
                
            </ul>
            
        </nav>
        
    );
}

export default Navigation;