/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams} from 'react-router';


const FileUploadBill=()=> {
  let user = JSON.parse(localStorage.getItem("user-info"));
   let user_id = user.user_id;
   let token = user.access_token;

  // State to store uploaded file
  const [file, setFile]=useState();
  //const[default_img,setDefaultImg]=useState();
  

  // Handles file upload event and updates state
   const handleUpload=(event) =>{
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    event.preventDefault();
  }

  const {front,utilitybill} = useParams();

  const Front=()=>{
  console.log(file)

  var formData = new FormData();
  formData.append("front",file);
  
  fetch(`http://192.168.1.12:8000/v1/users/files/${front}/${utilitybill}/${user_id}`,{
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Console Log - Response Received:");
          console.log(response);
          if (response.status) {
            console.log("successfully uploaded")
            //alert("successfully uploaded Your image")
            toast.success(`successfully uploaded Your image`);
          } else {
            console.log("failed to upload")
            //alert("Please Select File Type")
            toast.error(`Failed To Upload`);
          }
        })
        .catch((err) => {
          console.log("Console Log - Error Received when fetching data");
          console.log(err);
        });
      
}

return (
    <div id="upload-box" className="text-black">
    <ToastContainer/>
      <input type="file" onChange={handleUpload}/>
        {file &&<ImageThumb image={file} src={``}/>}
    
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2"
          type="submit"
          onClick={Front}
          >Upload
        </button>

  </div>
  );
}


const FileUploadBillBack=()=> {
  let user = JSON.parse(localStorage.getItem("user-info"));
  let user_id = user.user_id;
  let token = user.access_token;


   const [file, setFile]=useState();
 
   const handleUpload=(event) =>{
   setFile(event.target.files[0]);
   console.log(event.target.files[0]);
   event.preventDefault();
 }

 const {back,utilitybill} = useParams();

 const Front=()=>{
 console.log(file)

 var formData = new FormData();
 formData.append("back",file);
 
 fetch(`http://192.168.1.12:8000/v1/users/files/${back}/${utilitybill}/${user_id}`,{
       method: "PUT",
       headers: {
         authorization: `Bearer ${token}`,
       },
       body: formData,
     })
       .then((response) => response.json())
       .then((response) => {
         console.log("Console Log - Response Received:");
         console.log(response);
         if (response.status) {
           console.log("successfully uploaded")
           //alert("successfully uploaded Your image")
           toast.success(`successfully uploaded Your image`);
         } else {
           console.log("failed to upload")
           //alert("Please Select File Type")
           toast.error(`Failed To Upload`);
         }
       })
       .catch((err) => {
         console.log("Console Log - Error Received when fetching data");
         console.log(err);
       });
     
}

return (
   <div id="upload-box" className="text-black">
   <ToastContainer/>
     <input type="file" onChange={handleUpload}/>
       {file &&<ImageThumb image={file} src={``}/>}
   
       <button
         className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2"
         type="submit"
         onClick={Front}
         >Upload
       </button>

 </div>
 );
}

const ImageThumb = ({ image }) => {
  return (<img src={URL.createObjectURL(image)} alt={image.name} 
    className="mt-4 w-24 h-20"
  />
);

};
export default function App() {
  return(<FileUploadBill/>,
  <FileUploadBillBack/>)
}
