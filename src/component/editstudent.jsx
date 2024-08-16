import React, { useEffect } from "react"
import { useState} from "react"
import "../App.css/"
import { Editalldata } from "./helper"

const Editstudent=({studentdata,setstudentdata,show,setshow,editid})=>{
    const[studentname,setstudentname]=useState("")
    const[studentrollno,setstudentrollno]=useState("")
    const[studentbatch,setstudentbatch]=useState("")
    const[index,setindex]=useState()


    const updatetododetails=()=>{
        const editdata={
            name:studentname,
            rollno:studentrollno,
            batch:studentbatch
   
        }
        Editalldata(editid,editdata).then((data)=>{if(data){studentdata[index]=editdata   
           setstudentdata([...studentdata])
           setshow(!show)
        }})  
    }
    useEffect(()=>{
       const selecttodo=studentdata.filter((val)=>editid == val.id)
       const edidindex=studentdata.findIndex((val)=>editid == val.id)
       setindex(edidindex)
       setstudentname(selecttodo[0].name)
       setstudentrollno(selecttodo[0].rollno)
       setstudentbatch(selecttodo[0].batch)
    },[editid])

    return(
        <div className="inputform">
           <div className="iform">
        <p>Name</p>
            <input type="text" placeholder="Student Name" className="iname" value={studentname} onChange={(e)=>setstudentname(e.target.value)}/>
            <p>Roll Number</p>
            <input type="text" placeholder="Roll No" className="irollno" value={studentrollno} onChange={(e)=>setstudentrollno(e.target.value)}/>
            <p>Batch</p>
            <input type="text" placeholder="Batch" className="ibatch" value={studentbatch} onChange={(e)=>setstudentbatch(e.target.value)}/>
            <button className="ubtn" onClick={updatetododetails}>Update</button>
        </div>
            </div> 
          
    )
}

export default Editstudent