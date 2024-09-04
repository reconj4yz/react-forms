import React, { useState } from 'react'
// this is for controlled compnents way of handling forms
// in this way forms are handled using useState
const Controlled = () => {

const [val,setVal] = useState({name:"", email:''})
const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(val)
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input onChange={(event)=>setVal({...val, name: event.target.value})} type="text" placeholder='name'/>
            <input onChange={(event)=>setVal({...val, email: event.target.value})} type="email" placeholder='email'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Controlled