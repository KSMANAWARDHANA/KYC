/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import bethel from './bethel.png';
import { useHistory } from "react-router-dom";

export default function Nav(){

    const history = useHistory();

    function logout(){
        localStorage.clear();
        history.push('/')}

         
  
    return(
        <>
      
        <nav className="flex items-center justify-between flex-wrap bg-white py-4  shadow-lg">

                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <img className= "fill-current h-8 w-8 mr-2 ml-2"  width="54" height="54" alt="" src={bethel} />
                    
                    <span className="font-semibold text-2xl tracking-wider text-red-600 uppercase">
                    <a href="/">Bethel</a></span>
                </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-md ml-6">
                <a href="/dashboard" className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-red-800 mr-4 text-lg font-semibold">
                    Profile 
                </a>

                {/* <a href="/password" className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-red-800 mr-4 text-lg font-semibold">
                    Change Password
                </a> */}

                 <a href="/verifymobile" className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-red-800 mr-4 text-lg font-semibold">
                    Verify Mobile
                </a>
        </div> 

           
            <div class="lg:flex flex-grow items-center mr-6">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                     <li class="">
                   
                        <button className="rounded-lg text-sm bg-transparent hover:underline hover:bg-red-100 text-red-600 font-semibold hover:text-black py-2 px-5 border border-red-500 hover:border-transparent "
                        onClick={logout}>Logout</button>
                  
                    
                    </li>
                    <li class="ml-8 ">
                    <a href="/register">
                    <button className="mr-2 rounded-lg text-sm bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5  hover:underline">Signup</button>
                    </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>

   
       

       
</>
    )
}