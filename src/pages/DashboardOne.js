/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
import React, {useEffect, useState} from 'react'
import Nav from './Nav';
import axios from 'axios';
import SendSms from './SendSms';
import Modal from 'react-modal';
import { blue } from "@material-ui/core/colors";

//for profile pic
import FileUpload from './ProfileImgUpload/ImageUpload';
import FileUp from './ProfileImgUpload/imageView';

//for bill front and back
import FileUploadBill from './BillUpload/ImageBillFront';
import FileUploadBillBack from './BillUpload/ImageBillFront';
import ViewBillBack from './BillUpload/imageViewBill';
import ViewBillFront from './BillUpload/imageViewBill';

//for NIC front and back
import NicFront from './IDupload/ImageNic';
import NicBack from './IDupload/ImageNic';
import ViewNicFront from './IDupload/imageNicView';
import ViewNicBack from './IDupload/imageNicView';


export default function DashboardOne() {

     //API
  let user = JSON.parse(localStorage.getItem("user-info"));
  let userId = user.user_id;
  let token = user.access_token;

  
      //profile
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

     //update profile states

     const [first_name, setFirstNameEdit] = useState();
     const [middle_name, setMiddleNameEdit] = useState();
     const [last_name, setLastNameEdit] = useState();
     const [address, setAddressEdit] = useState();
     const [ethereum_public_address,setEthereumEdit] = useState();
     const [dob, setdobEdit] = useState();
    const [country, setCountryEdit] = useState();

  
    //get profile details 
     const getProfile=()=>{
    axios.get(`https://kyc.bethelnet.io/v1/users/${userId}`,{
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`}
    })
      .then((response) => {
        //debugger
        //setData(response.data);
        
       if (response.status) {
          console.log("Response Data - Success:");
          console.log(response);
          console.log(response.data.first_name);
          setFirstName(response.data.first_name);
          setLastName(response.data.last_name);
          setEmail(response.data.email);
  
        } else {
          console.log("Response Data - Failed:");
          console.log(response.message);
        }
      })
      .catch((err) => {
        console.log("Console Log - Error Received when fetching data:");
        console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  useEffect(()=>{
      getProfile();
  },)

  //update profile

  function updateProfile(event) {
    event.preventDefault();
    console.log(event);
    let item = {
      first_name,
      middle_name,
      last_name,
      address,
      ethereum_public_address,
      dob,
      country
    };
    console.log(item);

     fetch(`https://kyc.bethelnet.io/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Console Log - Response Received:");
          console.log(response);
          console.log(response.message);
          
          if (response.status) {
            console.log("successfully uploaded")
            //toast.success(`Your Profile Updated Successfully`);
          } else {
            console.log("failed to upload")
            //toast.error(`Failed to upload profile`);
          }
        })
        .catch((err) => {
          console.log("Console Log - Error Received when fetching data:");
          console.log(err);
        });

}

        const [modalIsOpen,setModalIsOpen] = useState(false);
        const setModalIsOpenToTrue =()=>{
            setModalIsOpen(true)
        }
        const setModalIsOpenToFalse =()=>{
            setModalIsOpen(false)
        }
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              backgroundColor       : blue      
            }
        };

      return (
          <div>
              <Nav/>
         
          <div className="bg-white mt-12 px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {/*card 01*/}
              
              <div className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Profile Info</div><hr/>
                        <div className="px-12 py-2">
                            <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                              First name <div><span className="inline-block  text-sm font-semibold text-blue-700  ">
                                        <input
                                          className='w-min px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                          type='text'
                                          placeholder='Enter your First Name'
                                          value={firstName}
                                        /></span></div>
                            </span>

                            <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                            Middle Name  <div><span className="inline-block  text-sm font-medium text-blue-700  ">
                                        <input
                                          className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                          type='text'
                                          placeholder='Enter your Middle Name'
                                        /></span></div>
                            </span>
                        </div>

                        <div className="px-12 py-0">
                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                          Last Name  <div><span className="inline-block  text-sm font-normal text-blue-700">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Select Your Country'
                                      value={lastName}                                     
                                    /></span></div>
                          </span>

                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                          Email <div><span className="inline-block  text-sm font-normal text-blue-700  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter your First Name'
                                      value={email}
                                    /></span></div>
                          </span>
                        </div>

                        <div className="px-12 py-0">
                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                          Address  <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Your Address'
                                     /></span></div>
                          </span>
                          
                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5 mt-2">
                          Ethereum Public Address <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Ethereum address'
                                    /></span></div>
                          </span>

                        <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5 mt-2">
                         Date of birth<div className="w-full"><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Date of Birth'
                                     /></span></div>
                        </span>

                        <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                         Country  <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Select Your Country'
                                    /></span></div>
                        </span>

                        {/* Update Profile */}

                        <button onClick={setModalIsOpenToTrue}  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2">
                          Edit
                        </button>

                        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} >
                            <button onClick={setModalIsOpenToFalse} className="font-bold text-3xl text-red-600">x</button>

                      <form onSubmit={updateProfile} autoComplete="off">
                        <div className="rounded overflow-hidden shadow-lg">
                          <div className="px-6 py-8">
                              <div className="font-semibold text-lg mb-2 ">Edit Profile</div><hr/>

                                <div className="px-12 py-2">
                                  <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                  First name  <div><span className="inline-block  text-sm font-semibold text-blue-700  ">
                                              <input
                                                className='w-min px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                type='text'
                                                placeholder='Enter your First Name'
                                                defaultValue={firstName}
                                                value={first_name}
                                                onChange={e => setFirstNameEdit(e.target.value)}
                                              /></span></div>
                                  </span>
                                  <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                  Middle Name  <div><span className="inline-block  text-sm font-medium text-blue-700  ">
                                              <input
                                                className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                type='text'
                                                placeholder='Enter your Middle Name'
                                                value={middle_name}
                                                onChange={e => setMiddleNameEdit(e.target.value)}
                                                /></span></div>
                                  </span>
                                </div>            
                                    
                                <div className="px-12 py-0">
                                    <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                    Last Name  <div><span className="inline-block  text-sm font-normal text-blue-700">
                                                <input
                                                  className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                  type='text'
                                                  placeholder='Enter Last Name'
                                                  defaultValue={lastName}
                                                  value={last_name}
                                                  onChange={e => setLastNameEdit(e.target.value)} 
                                                /></span></div>
                                    </span>


                                    <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                  Address  <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                              <input
                                                className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                type='text'
                                                placeholder='Enter Your Address'
                                                onChange={e => setAddressEdit(e.target.value)}
                                                value={address}
                                              /></span></div>
                                  </span>
                                   
                                </div>

                                <div className="px-12 py-0">

                                <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                    Country <div><span className="inline-block  text-sm font-normal text-blue-700  ">
                                                <input
                                                  className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                  type='text'
                                                  placeholder='Enter your Ethereum address'
                                                  onChange={e => setCountryEdit(e.target.value)}
                                                  value={country}
                                                /></span></div>
                                    </span>
                                  

                                  <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                  Ethereum Address  <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                              <input
                                                className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                type='text'
                                                placeholder='Enter Your Address'
                                                onChange={e => setEthereumEdit(e.target.value)}
                                                value={ethereum_public_address}
                                              /></span></div>
                                  </span>
                                
                                  <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                                  Date Of Birth  <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                              <input
                                                className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                                type='text'
                                                placeholder='Enter Your BirthDate'
                                                onChange={e => setdobEdit(e.target.value)}
                                                value={dob}
                                              /></span></div>
                                  </span>

                                  <button class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2"
                                    >
                                    Update
                                  </button>
                                </div>
                              </div>
                          </div>
                      </form>
                    </Modal>
                    {/*mobile verification*/}
                        <SendSms/>
                    </div>
                </div>
            </div>

             {/*card 02-->image uploads*/}

             <div className="ml-8 rounded overflow-hidden shadow-lg grid grid-cols-3">
                        <h5 className="mt-4 ml-4 font-semibold text-md">Uploads</h5>
                   
                         <div className="px-12 py-2 col-span-3">
                            <span className="-mt-24  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                            Upload Your Profile Picture<div><span className="inline-block  text-sm font-semibold text-gray-800  ">
                            </span></div></span>
                            <div class="lg:flex flex-grow items-center mr-6 -mt-8">
                                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                    <li class=""><FileUpload/></li>
                                    <li class="ml-8 "><FileUp/></li>
                                </ul>
                            </div>
                       </div>


                       <div className="px-12 py-2 col-span-3 -mt-12">
                            <span className="-mt-48  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                              Upload Your Bill Picture<div><span className="inline-block  text-sm font-semibold text-gray-800  ">
                            </span></div></span>
                            
                            <div class="lg:flex flex-grow items-center mr-6 -mt-8">
                                  <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                    <li class=""><FileUploadBill/></li>
                                    <li class="ml-8 "><ViewBillFront/></li>
                                </ul>
                            </div>

                            <div class="lg:flex flex-grow items-center mr-6">
                                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                    <li class=""><FileUploadBillBack/></li>
                                    <li class="ml-8 "><ViewBillBack/></li>
                                </ul>
                            </div>
                       </div>
                        
                       <div className="px-12 py-2 col-span-3 -mt-12">
                            <span className="-mt-48  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                            Upload Your NIC Images<div><span className="inline-block  text-sm font-semibold text-gray-800  ">
                            </span></div></span>
                            <div class="lg:flex flex-grow items-center mr-6 -mt-8">
                                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                    <li class=""><NicFront/></li>
                                    <li class="ml-8 "><ViewNicFront/></li>
                                </ul>
                            </div>

                            <div class="lg:flex flex-grow items-center mr-6">
                                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                    <li class=""><NicBack/></li>
                                    <li class="ml-8 "><ViewNicBack/></li>
                                </ul>
                            </div>
                       </div>
              </div>
        </div>
    </div>
    )
}
