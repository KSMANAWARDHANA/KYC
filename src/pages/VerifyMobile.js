import {React, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Nav from './Nav';
import {Link} from "react-router-dom";

export default function VerifyMobile() {

    let user = JSON.parse(localStorage.getItem("user-info"));
    let userId = user.user_id;
    let token = user.access_token;


    const history = useHistory();

    const [code, setCode] = useState("");
    const [mobile, setMobile] = useState("");
 
    useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/verifymobile");
    }
  }, [history]);

  
  async function verify(event) {
    event.preventDefault();

    let item = { code, mobile };
    console.log(item);
  

    fetch(`https://kyc.bethelnet.io/v1/users/verifymobile/${userId}`,
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
          localStorage.setItem("user-info", JSON.stringify(response));
          history.push("/verifymobile");
        } else {
          
        }
      })
      .catch((err) => {
        console.log("Console Log - Error Received when fetching data:");
        console.log(err);
      });
  }


return (
        <div>
             <Nav/>

            <div className="mt-24  mb-10 bg-transparent px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
            {/*card 01*/}
            <div className=" rounded shadow-2xl flex items-center justify-center bg-white">
                <div className="w-3/4 bg-gray-100 h-1/2 flex flex-col justify-center px-1 py-8 rounded-r-lg body-step">
                    <h2 className="font-semibold text-lg text-red-600  ml-2 text-center mt-12">Two Step Verification</h2>
                    <p className="ml-2 text-sm text-gray-800 font-semibold text-center">
                      we sent a verification code to your mobile'
                      Enter the 5 digit code from the mobile in the field below.
                    </p>

                        <input
                            className=' w-full  mt-8  px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='5 digit Code'
                            onChange={e => setCode(e.target.value)}
                        />

                        <input
                            className=' w-full  mt-8  px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='EnterMobileNumber'
                            onChange={e => setMobile(e.target.value)}
                        />

                        <button
                            className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-48 w-1/2"
                            type='submit'
                            onClick={verify}
                            >
                            <span className='ml-3'>Verify mobile</span>
                        </button>


                    <div  className="mt-12 text-center">
                            <Link
                            to='/dashboard'
                            className="mt-12 text-right text-indigo-500"
                            >Back to profile</Link>
                            </div>
                  </div>
            </div>
        
        </div>
            
        </div>
    )
}
