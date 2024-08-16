import React, { useState } from "react";
import "../App.css/"
import { Addalldata } from "./helper";

const Addstudent=({studentdata,setstudentdata})=>{
    const[studentname,setstudentname]=useState("")
    const[studentrollno,setstudentrollno]=useState("")
    const[studentbatch,setstudentbatch]=useState("")
    const addtododetails=()=>{
        const newdetails={
            name:studentname,
            rollno:studentrollno,
            batch:studentbatch
        }
        Addalldata(newdetails).then((data)=>{if (data){ setstudentdata([...studentdata,newdetails])
            setstudentname("")
            setstudentrollno("")
            setstudentbatch("")}
        else{alert("cannot add data")}})
       
    }
return(
    <div className="inputform">
        <div className="iform">
        <p>Name</p>
            <input type="text" placeholder="Student Name" className="iname" value={studentname} onChange={(e)=>setstudentname(e.target.value)}/>
            <p>Roll Number</p>
            <input type="text" placeholder="Roll No" className="irollno" value={studentrollno} onChange={(e)=>setstudentrollno(e.target.value)}/>
            <p>Batch</p>
            <input type="text" placeholder="Batch" className="ibatch" value={studentbatch} onChange={(e)=>setstudentbatch(e.target.value)}/>
            <button className="abtn" onClick={addtododetails}>Add</button>  
            </div> 
    </div>
)
}   
export default Addstudent