/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from "react";
import axios from 'axios';
import Modal from 'react-modal';
import { blue } from "@material-ui/core/colors";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";


const FileUp=()=> {
  let user = JSON.parse(localStorage.getItem("user-info"));
   let user_id = user.user_id;
   let token = user.access_token;

   const [file, setFile]=useState();
   const[default_img,setDefaultImg]=useState();


   const viewImage=()=>{
  axios.get(`https://kyc.bethelnet.io/v1/users/profilepicture/${user_id}`,{
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`}
  })
    .then((response) => {
     
     if (response.status) {
        console.log("Response Data - Success:");
        console.log(response);
        setFile(response.profilepic);
        setDefaultImg(response.data.image_stream)

      } else {
        console.log("Response Data - Failed:");
        console.log(response.message);
      }
   })
    .catch((err) => {
      console.log("Console Log - Error Received when fetching data");
      console.log(err);
    });
}
console.log(default_img);

useEffect(()=>{
    viewImage();
},[])

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

    return(
        <>
            <button onClick={setModalIsOpenToTrue}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2"
            >View</button>

            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} >
                 <button onClick={setModalIsOpenToFalse} className="font-bold text-3xl text-red-600">x</button>
                 <img src={`data:image/png;base64,${default_img}`} alt="modal_image" className=" w-1/2 h-1/2 ml-48 mt-12 item-center mb-12 "/>
            </Modal>
        </>
    )

}

export default function App() {
  return <FileUp/>;
}
