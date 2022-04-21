import React, {useContext} from "react";
import {SiEthereum} from "react-icons/si";

import {Navigation} from "./";


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
        <Navigation/>
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black py-1">
                        This is your transaction
                    </h1>
                    

                </div>
                
                

                
            </div>
        </div>

        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 m-auto bg-[#000000]">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff" />
                    </div>
                    
                </div>
                <div>
                    <p className="text-[#ffff00] font-light text-base">
                        {currentAccount ?  shortenAddress(currentAccount)
                        : "Connect to your metamask account"
                        }
                    </p>
                    <p className="text-white font-semibold text-lg mt-1">
                        Ethereum
                    </p>
                </div>
            </div>
        </div>
        
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