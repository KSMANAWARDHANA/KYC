/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { useParams} from 'react-router';
import verify from '../assets/verify.png';
import { NavLink } from 'react-router-dom';

export default function VerifyEmail() {
    
    const {email, hash} = useParams();
    console.log(email,hash);
    
   async function verifyEmail() {
    

    let result = await fetch(`https://kyc.bethelnet.io/v1/auth/verifyemail/${email}/${hash}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
     
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
  }

  useEffect(() => {
   verifyEmail();
  })
    
return (
    <div className='min-h-screen bg-gray-300 text-gray-900 flex justify-center '>
        <div className='max-w-screen-lg m-8 sm:m-18 bg-white flex justify-center flex-1 rounded-3xl shadow-xl '>
            <div class="relative overflow-hidden bg-gray-100 lg:w-full xl:w-5/12 rounded-3xl flex-1 md:flex ml-24">
             
                    <div className="mt-5">
                        {/* <span  className="ml-8 absolute w-full text-xl xl:text-xl font-semibold  text-red-700">BETHEL</span> */}
                        <h2 className='text-xl  text-blue-600 ml-48 mt-24 font-semibold tracking-wider'>&nbsp;&nbsp;&nbsp;Your Email Has Been Successfully Verified!</h2>
                        <img src={verify} alt="" class=" mt-12 w-1/2 h-1/2 object-contain ml-48" />
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-48 ml-48 mt-12 rounded-full">
                            <NavLink
                            to="./">
                                Please SignIn
                            </NavLink>
                        </button>
                    </div>
            </div>
        </div>
    </div>
    )
}
