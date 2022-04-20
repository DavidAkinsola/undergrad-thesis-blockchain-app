import {React, useContext} from "react";
import {Link} from "react-router-dom"

import logo from '../../images/apt-logo.png';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Navigation = () => {
    const {currentAccount} = useContext(TransactionContext);
    return(
        <nav className="w-full flex md:justify-center justify-between items-center p-5 navbar">
            
            <Link to="/">
            <div className="md:flex-[0.5] flex-initial justify-start display-content items-center">
                <h1 className="cgothic text-5xl text-black font-bold  md:w-96 w-24 cursor-pointer">
                    apt.
                </h1>
                

            </div>
            </Link>

            <ul className="flex list-none flex-row justify-between items-center flex-initial cgothic">
                <Link to="/" 
                    className="mx-4 cursor-pointer text-black hover:text-[#fff]">
                    Home
                </Link>

                <Link to="/dashboard" 
                    className="mx-4 cursor-pointer text-black hover:text-[#fff] ">
                        Dashboard
                </Link>

                {currentAccount ?(
                    <Link to="/wallet" 
                        className="text-white md:text-2xs text-xs bg-[#000000] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#333]">
                            Wallet <p className="text-[#ff0">{shortenAddress(currentAccount)}</p>
                    </Link>
                ) : (
                    <Link to="/wallet" 
                        className="text-white md:text-base text-xs bg-[#000000] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#333]">
                            Connect Wallet
                    </Link>
                )}

                
                
                
            </ul>
            
        </nav>
        
    );
}

export default Navigation;