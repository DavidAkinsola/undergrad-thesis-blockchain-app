import React, {useContext} from "react";



const Home =() => {
    return (
        <div>
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black py-1 cgothic">
                        Welcome to apt.
                    </h1>
                    <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
                       a platform for you to make real estate payments on the blockchain.
                    </p>
                   
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

                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    
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
                
            </div>
        </div>
        
        </div>
    )
}

export default Home;