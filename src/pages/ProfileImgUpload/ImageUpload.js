/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const FileUpload=()=> {
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

  const test=()=>{
    console.log(file)

  var formData = new FormData();
  formData.append("profilepic",file);
  
  fetch(`https://kyc.bethelnet.io/v1/users/profilepicture/${user_id}`, {
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
            toast.success("successfully uploaded Your image");
          } else {
            console.log("failed to upload")
            //alert("Please Select File Type")
            toast.error("Please Select File Type");
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
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {/* {file &&<ImageThumb image={file} src={`data:image/png;base64,${default_img}`}
      
      />} */}

    {file &&<ImageThumb image={file} src={``}  className="mt-4"/>}
    
    <button
      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2"
      type="submit"
      onClick={test}
      >Upload
    </button>
  </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return (<img src={URL.createObjectURL(image)} alt={image.name} 
    className="mt-4 w-24 h-20"
  />
);

};
export default function App() {
  return <FileUpload/>;
}
