import React,{useState} from "react";


const NicUpload=()=> {
  let user = JSON.parse(localStorage.getItem("user-info"));
   let user_id = user.user_id;
   let token = user.access_token;

  // State to store uploaded file
  const [file, setFile] = useState();
  

  // Handles file upload event and updates state
   const handleUpload=(event) =>{
    
    //let file=event.target.files[0];
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    event.preventDefault();
  }
const test=(event)=>{
  console.log(file)
  var formData = new FormData();
  formData.append("front,back",file);
  //formData.append("back",file);
  
  fetch(`https://kyc.bethelnet.io/v1/users/files/passport/${user_id}`, {
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
            alert("successfully uploaded Your image")
          } else {
            console.log("failed to upload")
            alert("Please Select File Type")
          }
        })
        .catch((err) => {
          console.log("Console Log - Error Received when fetching data:");
          console.log(err);
        });
      
}

  return (
    <div id="upload-box" className="text-black">
      <input type="file" onChange={handleUpload} />
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {file && <ImageThumb image={file} />}
      

      <button
      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 border-none"
      type="submit"
      onClick={test}
      >Upload</button>
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} 
    className="mt-4 w-24 h-20"
  />;
};



export default function App() {
  return <NicUpload/>;
}
