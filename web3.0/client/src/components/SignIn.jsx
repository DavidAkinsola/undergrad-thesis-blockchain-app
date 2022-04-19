import React, {useContext} from "react";
import { shortenAddress } from "../utils/shortenAddress";

const SignIn =() => {
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 md:w-[500px] w-full items-center justify-start flex-col md:mr-10 bg-[#770]">
                    <form action="" method="post">
                        <div 
                        className="p-5 sm:w-96 w-full flex flex-col 
                        justify-start items-center bg-white text-black"
                        >     
                            <h1 className="cgothic text-3xl">Register</h1> <br />
                            <h1 className="cgothic text-base">if you are new here...</h1> <br />


                            <input placeholder = "Full Name (according to ID)" type="text"
                            className="my-2 w-full rounded-sm p-2 outline-none bg-[#ddd] placeholder:text-[#000] text-black border-solid border-2 border-[#770] text-sm"
                            />

                            <input placeholder = "Username" type="text"
                            className="my-2 w-full rounded-sm p-2 outline-none bg-[#ddd] placeholder:text-[#000] text-black border-solid border-2 border-[#770] text-sm"
                            />

                            <input placeholder = "Password" type="text"
                            className="my-2 w-full rounded-sm p-2 outline-none bg-[#ddd] placeholder:text-[#000] text-black border-solid border-2 border-[#770] text-sm"
                            />

                            <input placeholder = "Metamask Address" type="text"
                            className="my-2 w-full rounded-sm p-2 outline-none bg-[#ddd] placeholder:text-[#000] text-black border-solid border-2 border-[#770] text-sm"
                            />

                            <button
                                type = "button"
                                className = "text-white w-full mt-2 border-[1px] p-2 border-[#ffffff] bg-[#000] hover:bg-[#333] rounded-full cursor-pointer"
                            >
                                Register
                            </button>
                        
                        </div>
                    </form>
                    
                </div> <br />

                <div className="flex flex-1 md:w-[500px] w-full items-center justify-start flex-col md:mr-10 bg-[#000]">
                    <form action="" method="post">
                        <div 
                        className="p-5 sm:w-96 w-full flex flex-col 
                        justify-start items-center bg-white text-black"
                        >     
                            <h1 className="cgothic text-3xl">Login</h1> <br />
                            <h1 className="cgothic text-base">if you already have an account</h1> <br />
                            <input placeholder = "Username" type="text"
                            className="my-2 w-full rounded-sm p-2 outline-none bg-[#ddd] placeholder:text-[#000] text-black border-solid border-2 border-[#770] text-sm"
                            />
                            <input placeholder = "Password" type="text"
                            className="my-2 w-full rounded-sm p-2 outline-none bg-[#ddd] placeholder:text-[#000] text-black border-solid border-2 border-[#770] text-sm"
                            />

                            <button
                                type = "button"
                                className = "text-white w-full mt-2 border-[1px] p-2 border-[#ffffff] bg-[#000] hover:bg-[#333] rounded-full cursor-pointer"
                            >
                                Login
                            </button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;