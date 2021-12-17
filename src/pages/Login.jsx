import {React, useEffect, useState} from "react";
import {Link, useHistory } from "react-router-dom";
import img8 from '../assets/img8.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function login() {
   
    let item = {email, password};

    let result = await fetch("https://kyc.bethelnet.io/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
     
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/dashboard");
  }

  useEffect(() => {
    if(localStorage.getItem("user-info")) {
      history.push("/dashboard");
    }
  })
  return (
     <div className='min-h-screen bg-gray-300 text-gray-900 flex justify-center'>
        
            <div className='max-w-screen-lg m-8 sm:m-18 bg-white flex justify-center flex-1 rounded-3xl shadow-xl'>
             {/*left container */}
             <div class="relative overflow-hidden bg-gray-100 lg:w-1/2 xl:w-5/12 rounded-3xl flex-1 md:flex">
                    <div className="mt-5">
                        <span  className="ml-5 absolute w-full text-xl xl:text-xl font-semibold  text-red-700">BETHEL</span>
                    </div>
                    <img src={img8} alt="" class=" mt-24 object-contain object-center" />
              </div>
     
            {/*Right container*/}
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 px '>
                    <div className='mt-12 flex flex-col items-center space-y-2 px-3 py-1 '>
                            <h2 className='text-lg font-normal text-gray-600'>Welcome to BETHEL !</h2> 
                    
                    {/*form div */}
                    <div className="">
                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='email'
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='password'
                            placeholder='Enter your Password'
                            onChange={(e) => setPassword(e.target.value)}
                            />

                            <div>
                            <Link
                            to='/users/password/forget'
                            className='text-right text-indigo-500  mt-2'
                            >
                            Forget password?
                            </Link>
                            </div>
                    </div> 

                             <button
                            type='submit'
                            className=' w-full max-w-xs mt-12 tracking-wide font-semibold bg-indigo-600 text-gray-100  py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                            onClick={login}
                            >
                            <i className='fas fa-sign-in-alt  w-12 -ml-2' />
                            <span className='ml-3'>Sign In</span>
                            </button>
              
                    <div className='flex flex-col items-center '>
                       <a
                        className='w-full max-w-xs font-bold shadow-sm rounded-lg py-1'
                        href='/register'
                        target='_self'
                        >
                        <h5 className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>New on our platform? <span className='ml-0 text-blue-500'>Create account</span></h5>
                        </a>
                        <div className='my-2 border-b text-center font-semibold text-gray-600'>
                            Or
                        </div>
                       
                        <div className="flex py-2  ">
                              <i   className="bg-blue-600 flex items-center justify-center h-12 w-12 mx-1 py-3 px-4 rounded-full fab fill-current text-white text-xl fa-facebook-f"/>
                              <i   className=" bg-green-500 flex items-center justify-center h-12 w-12 mx-1 py-3 px-4 rounded-full fas fill-current text-white text-xl fa-envelope"></i>
                              <i   className="bg-red-500 flex items-center justify-center h-12 w-12 mx-1 rounded-full py-3 px-4 fab fill-current text-white text-xl fa-instagram"></i>
                              <i    className="bg-blue-300 flex items-center justify-center h-12 w-12 mx-1 rounded-full py-3 px-4 fab fill-current text-white text-xl fa-twitter"></i>
			                  </div>
                  </div>
           </div>
        </div>
    </div>
</div>
  );
}