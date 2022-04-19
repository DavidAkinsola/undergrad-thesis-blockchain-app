import React, {useContext} from "react";
import {TransactionNavbar, Wallet} from "./";


import { TransactionContext } from "../context/TransactionContext";

import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = ({addressTo, addressFrom, timestamp, message, amount, keyword}) =>{
    return (
        <div className="bg-[#000] m-2 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl
        ">
            <div className="flex-flex-col items-center w-full mt-2">
                <div className="w-full mb-2 p-1">
                    <a href= {"https://ropsten.etherscan.io/address/"+addressFrom} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <p className="text-white hover:text-[#ff9] text-xs"> 
                            From: {shortenAddress(addressFrom)}
                            </p>
                    </a>
                    <a href= {"https://ropsten.etherscan.io/address/"+addressTo} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <p className="text-white hover:text-[#ff9] text-xs"> 
                            To: {shortenAddress(addressTo)}
                            </p>
                    </a>
                    <p className="text-[#ff0] text-lg"> {amount} ETH</p>
                    <p className="text-[#999] text-xs"> Keyword: {keyword}</p>

                    {message && (
                        <>
                            
                            <p className="text-[#999] text-xs"> 
                            Message: {message}
                            </p>
                        </>
                    )}

                    <p className="text-[#660] font-light text-xs">Time: {timestamp}</p>

                </div>

            </div>

        </div>
    );
}


const Transactions = () => {
    const {currentAccount, transactions} = useContext(TransactionContext);
    
    
    return(
        <div>
            <TransactionNavbar/>
            <Wallet/>
        <div className="flex w-full justify-center items-center 2xl:px-20 bg-[#ddd]">
            <div className="flex flex-col md:py-12 py-12 px-4">
                {currentAccount? (
                    <h3 className="text-black text-3xl text-center my-2">
                        Transactions on the Blockchain
                    </h3>
                ) : (
                    <h3 className="text-black text-3xl text-center my-2">
                        Connect account to see latest transactions
                    </h3>
                )}

                <div className="flex flex-wrap justify-center items-center mt-10">
                    
                    {
                       transactions.map((transaction, i) => (
                           
                        
                            <TransactionCard key={i} {...transaction} />
                        
                            
                            
                        
                        
                        )).reverse()
                    }
                </div>

            </div>
        </div>
        </div>
    )   
}

export default Transactions;