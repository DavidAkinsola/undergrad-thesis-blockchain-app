import React, {useContext} from "react";

import {SiEthereum} from "react-icons/si";

import { Navigation } from ".";


import {TransactionContext} from "../context/TransactionContext";
import {Loader} from ".";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
    placeholder = {placeholder}
    type={type} 
    step = "0.0001"
    value = {value}
    onChange= {(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-[#111] placeholder:text-[#777] text-white border-none text-sm"
    />
    
);

const Wallet = () => {
    const {connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading} = useContext(TransactionContext);
    
    const handleSubmit = (e) =>{
        const{addressTo, amount, keyword, message} = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }

    return(
        <div>
            <Navigation/>
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black py-1">
                        Make Rental payments and Transactions
                    </h1>
                    <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
                        Please make sure you have the correct address with which you want to send cryptocurrency
                    </p>
                    {!currentAccount && (<button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 
                        bg-[#000000] p-3 rounded-full cursor-pointer hover:bg-[#333]"
                    >
                        <p className="text-white text-base font-bold">Connect Metamask Wallet</p>
                         
                    </button>
                    )}

                    <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-xs">
                        Insert the addres that you are sending money to into <em>Address To</em>
                        <br /><br />
                        Insert the amount of Ether you want to send into <em>Amount (ETH)</em>
                        <br /><br />
                        <em>Keyword</em> - this is a identifier for your transaction. It can be [Rent] or [Auction] or [Deal]
                        <br /><br />
                        you can also send your personal message through your transaction by entering in via <em>Message</em>
                    </p>

                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 bg-[#000000]">
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

                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-[#000] text-black">
                        <Input placeholder = "Address To" name="addressTo" type="text" handleChange = {handleChange} />
                        <div className="h-[1px] w-full bg-black my-2"></div>
                        <Input placeholder = "Amount (ETH)" name="amount" type="number" handleChange = {handleChange} />
                        <div className="h-[1px] w-full bg-black my-2"></div>
                        <Input placeholder = "Transaction Keyword" name="keyword" type="text" handleChange = {handleChange} />
                        <div className="h-[1px] w-full bg-black my-2"></div>
                        <Input placeholder = "Message" name="message" type="text" handleChange = {handleChange} />
                        <div className="h-[1px] w-full bg-black my-2"></div>


                        

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type = "button"
                                onClick = {handleSubmit}
                                className = "text-white w-full mt-2 border-[1px] p-2 border-[#ffffff] bg-[#660] hover:bg-[#880] rounded-full cursor-pointer"
                            >
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </div>
        </div>
    )   
}

export default Wallet;