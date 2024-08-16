import React, { useState,useEffect} from 'react'
import Addstudent from './component/addstudent'
import { Deletealldata, Getalldata } from './component/helper'
import "./App.css/"
import Editstudent from './component/editstudent'

function App() {
    document.title=("Student Form")
   
    useEffect(()=>{
        Getalldata().then((data)=>{setstudentdata(data)})
    },[])

    const[show,setshow]=useState(true)
    const[editid,seteditid]=useState("")
  
    const [studentdata,setstudentdata]=useState()
 
   

//handle delete
const handledelete=(id)=>{
    Deletealldata(id).then((data)=>{
        if(data){
        const remainstudent= studentdata.filter((val) => val.id !==id)
        setstudentdata(remainstudent)}
        else{console.log("erroe")}
    })
  }

//handle edit
const handleedit=(id)=>{
    setshow(false)
    seteditid(id)
    
}


   

  return(

    <div className="main">
        <div className="title">
            <h1>Student Form</h1>
        </div>
        {show===true? (<Addstudent
         studentdata={studentdata}
         setstudentdata={setstudentdata}/>) :  (<Editstudent
            studentdata={studentdata}
            setstudentdata={setstudentdata}
            show={show}
            setshow={setshow}
            editid={editid}/>)}
         

    {(
    <>
    <div className="cards">
    {studentdata?.map((value)=> (
        <div className="card" key={value.id}>
            <h2>{value.name}</h2>
            <p className='rollno'>Roll no: {value.rollno}</p>
            <p className='batch'>Batch : {value.batch}</p>
        <div className="btn">
            <button className='ebtn' onClick={()=>handleedit(value.id)}>Edit</button>
            <button className='dbtn' onClick={()=>handledelete(value.id)}>Delete</button>
        </div>
        </div>))}
        </div>
    </>
  )}
  </div>
    )
}

export default App