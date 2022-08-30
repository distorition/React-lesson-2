import { useEffect, useState } from "react";

const [state,setSteat]= useState([]);
const placeholder=[{
    id:1,
    text:'sss',
    autohr:'ddd'
}];

useEffect(()=>{
    setSteat(placeholder)
},[])

return(
    <>
    <div> </div>
    <input onChange={value=>setState(values)}></input>
    state.map((el,index)=<div key={placeholder.id}></div>)
    </>
)
