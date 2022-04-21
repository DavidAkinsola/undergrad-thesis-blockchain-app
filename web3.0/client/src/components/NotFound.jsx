import React from "react";
import {Link} from "react-router-dom"


const NotFound =() => {
    return (
        <div>
        
        <div className="flex w-full justify-center items-center bg-white">
            <Link to="/">
                <h1 className="cgothic text-5xl text-black font-bold  md:w-96 w-24 cursor-pointer justify-center">
                    apt.
                </h1>
            </Link>
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black py-1 cgothic">
                        oh oh! <br /> seems like you are lost :(
                    </h1>
                    <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
                       This is an invalid link. This means it is either broken, or it no longer
                       exists
                    </p>

                    <Link to="/">
                        <p className="text-left mt-5 text-black hover:text-[#770] font-light md:w-9/12 w-11/12 text-xs underline underline-offset-4">
                            Go back to Home page
                        </p>
                    </Link>
                   
                    

                </div>
                
            </div>
        </div>
        
        </div>
    )
}

export default NotFound;