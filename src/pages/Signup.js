/* eslint-disable no-lone-blocks */
/* eslint-disable no-sequences */
import {React, useState} from "react";
import { useHistory } from "react-router-dom";
import img5 from '../assets/img5.png';
import validator from 'validator';


export default function Signup() {
    const history = useHistory();
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    // const [phone, setPhone] = useState("");
    // const [country, setCountry] = useState("");
    // const [country_code, setCountryCode] = useState("");
  

    async function signUp() {
      let item = {
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        // phone,
        // country,
        // country_code,
      };
      console.warn(item);
  
      let result = await fetch("https://kyc.bethelnet.io/v1/auth/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      history.push("/");
      alert("please verify your email to login")
    }

    
    //validations
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter a valid Email!')
      }
    }

    
  
  return (
     <div className='min-h-screen bg-gray-300 text-gray-900 flex justify-center'>
        
            <div className='max-w-screen-lg m-8 sm:m-18 bg-white shadow  flex justify-center flex-1 rounded-3xl'>
             {/*left side*/}
             <div className="relative overflow-hidden bg-gray-100 lg:w-1/2 xl:w-5/12 rounded-3xl flex-1 md:flex">
                    <div className="mt-5">
                    {/*<span className="inline-block  ml-0"><img src={bethel} alt="" class="ml-5 my-8  h-8 w-8 object-contain" /></span>*/}
                    <span  className="ml-5 absolute w-full text-xl xl:text-xl font-semibold  text-red-700">BETHEL</span>
                    </div>
                    <img src={img5} alt="" class=" mt-24  object-contain   object-center" />
                   </div>
     
            {/*Right container*/}
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 px '>
                    <div className='mt-24 flex flex-col items-center space-y-1 px-3 py-1 '>
                            <h2 className='-mt-8 text-lg font-semibold text-gray-700'>Enter All Details</h2> 
                    
                    {/*form div */}
                    <div className="">
                          <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setFirstName(e.target.value)}
                            />
                            <input
                            className='mt-4 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your Last Name'
                            onChange={e => setLastName(e.target.value)}
                            />
                            <input
                            className='mt-4 w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='email'
                            placeholder='Enter your email'
                            onChange={
                                e => setEmail(e.target.value),
                                (e) => validateEmail(e)
                            }
                            />
                             <span style={{
                                fontWeight: 'semi-bold',
                                color: 'red',
                                }}>{emailError}</span>
                                                    
                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='password'
                            placeholder='Enter your Password'
                            onChange={e => setPassword(e.target.value)}
                            />

                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='password'
                            placeholder='confirm your Password'
                            onChange={e => setConfirmPassword(e.target.value)}
                            />

                            {/* <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='text'
                            placeholder='enter your phone Number'
                            onChange={e => setPhone(e.target.value)}
                            />

                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='text'
                            placeholder='Enter Your country'
                            onChange={e => setCountry(e.target.value)}
                            />

                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='text'
                            placeholder='country code'
                            onChange={e => setCountryCode(e.target.value)}
                            /> */}

                            <button
                            type='submit'
                            className=' w-full max-w-xs mt-4 tracking-wide font-semibold bg-indigo-600 text-gray-100  py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                            onClick={signUp}
                            >
                            <i className='fas fa-sign-in-alt  w-12 -ml-2' />
                            <span className='ml-3'>Sign Up</span>
                            </button>
                </div>
           </div>
        </div>
    </div>
</div>
  );
}