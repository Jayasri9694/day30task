import Api from "./api"

 export async function Getalldata(){
    const res = await fetch(Api,{method : "GET"})
    const data = await res.json()
    return data
}

export async function Deletealldata(id){
    const res= await fetch(`${Api}/${id}`,{method:"DELETE",
    headers:{"content-type":"application/json"}})
    const data =await res.json()
    return data
}

export async function Addalldata(newtodo){
    const res= await fetch(Api,{method:"POST",
    body :JSON.stringify(newtodo),
    headers:{"content-type":"application/json"}})
    const data =await res.json()
    return data
}

export async function Editalldata(id,edittodo){
    const res= await fetch(`${Api}/${id}`,{method:"PUT",
    body :JSON.stringify(edittodo),
    headers:{"content-type":"application/json"}})
    const data =await res.json()
    return data
}