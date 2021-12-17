/* eslint-disable no-sequences */
import React, { useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SendSms() {

     //API
  let user = JSON.parse(localStorage.getItem("user-info"));
  let userId = user.user_id;
  let token = user.access_token;

  
  const history = useHistory();
 
  const [country_code, setCode] = useState("");
  const [mobile_number, setMobile] = useState("");
  //API- Post sms api
    
  async function sms(event) {
    event.preventDefault();

    let item = {country_code, mobile_number};
    console.log(item);

    fetch(`https://kyc.bethelnet.io/v1/users/sms/${userId}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          console.log(response);
          localStorage.setItem("user-info", JSON.stringify(response));
          history.push("/verifymobile");
          toast.success(`OTP has sent to your mobile`);
        } else {
          console.log("failed to send the sms!")
        }
      })
      .catch((err) => {
        console.log("Console Log - Error Received when fetching data");
        console.log(err);
      });
  }

  useEffect(() => {
    if(localStorage.getItem("user-info")) {
     }
  })

  return (

      <div>
      <ToastContainer/>
          <div className="rounded overflow-hidden shadow-lg mt-5">
                <div className="px-6 py-4">
                    <div className="px-12 py-0 -ml-20">
                      {/*<span className="-ml-6  inline-block  text-sm font-semibold text-gray-700 mr-2  mt-2">
                         Mobile Number<div className="w-full"><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    
                                   <input
                                      className='text-gray-800 w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter your Country code'
                                      onChange={e => setCode(e.target.value)}
                                    />

                                    <input
                                      className='text-gray-800 mt-2 w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter your mobile Number'
                                      onChange={e => setMobile(e.target.value)}
                                    />
                                    
                                   </span></div></span>*/}

                                   <span className="inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">Verify Your Mobile
                                      <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                        <input
                                            className='text-gray-800 mt-2 w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                            type='text'
                                            placeholder='Enter your country code'
                                            onChange={e => setCode(e.target.value)}
                                          /></span>
                                      </div>
                                    </span>

                                   <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                      <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                        <input
                                            className='text-gray-800 mt-2 w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                            type='text'
                                            placeholder='Enter your mobile Number'
                                            onChange={e => setMobile(e.target.value)}
                                          /></span>
                                      </div>
                                    </span>

                                   {/*<button 
                                    class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4"
                                    onClick={sms}>
                                    verify
                                  </button>*/}
                            </div>

                            <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4"
                            onClick={sms}>
                               verify 
                            </button>
                    </div>
              </div>
        </div>
    )
}
