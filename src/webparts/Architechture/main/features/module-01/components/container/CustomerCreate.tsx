import * as React from "react";
import { useState } from "react";
import CreateView from "../presentation/CreateView";
import { mergeStyles, PrimaryButton, TextField } from "@fluentui/react";
import BasePnpService from "../../../../shared/services/basePnp.service";

const CustomerCreate = () => {

  const[data,setData] = useState({
    username:'',
    email:'',
    contact:0,
    image:''
  })
  const [img,setImg] = useState()
  
const childTextBoxClass = mergeStyles({
  display:'block',
  marginBottom:'10px'
})

const handleInsertion = async()=>{
  const payload = {username:data.username,email:data.email,contact:data.contact,image:data.image}
  const service = BasePnpService.getPersistentInstance()
  const response = service.create('Customers',payload)
  console.log('customer added',response)
}

const handleChange = async(event:any)=>{
  const inputId = event.target.id
  const inputValue = event.target.value
  
  setData((prevData)=>({
    ...prevData,
    [inputId]:inputId === 'contact' ? Number(inputValue):inputValue
  }))
  }

  const handleImageChange = async(e:any)=>{
    const imgPreview = e.target.files[0]
    setImg(imgPreview)
  }

const handleImageUpload = async()=>{
  const libraryName = "/sites/Testing/PracticeLib";
  const service = BasePnpService.getPersistentInstance();
  if(img){
  const response = await service.createFile(img, libraryName);
  console.log('File',response)
}}
  return (
    <div>
      <CreateView />
      <TextField 
      className={childTextBoxClass}
      id="username"
      label="User Name:"
      value={data.username}
      onChange={handleChange}
      />
      <TextField 
      className={childTextBoxClass}
      id="email"
      label="Email:"
      value={data.email}
      onChange={handleChange}
      />
       <TextField 
      className={childTextBoxClass}
      id="contact"
      label="Contact Number:"
    
      value={data.contact.toString()}
      onChange={handleChange}
      />

      <PrimaryButton text = 'Insert' onClick={handleInsertion} />
      <input type="file" id="fileInput" onChange={handleImageChange}/>
     <PrimaryButton text="Submit" onClick={handleImageUpload}/>
      {img ? <img src = {URL.createObjectURL(img)} alt='image'/> : <img alt='image not found'/>}
    </div>
  );
};

export default CustomerCreate;
