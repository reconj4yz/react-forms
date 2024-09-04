import React, { useRef } from 'react'

const UseRef = () => {
  const name = useRef(null);
  const age = useRef(null);
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(name.current.value , age.current.value)
  }
  return (
    <div className='p-5'>
      <form action="" onSubmit={handleSubmit}>
      <input className='border-4' ref={name} placeholder='name' type="text" />
      <input className='border-4' ref={age} placeholder='age' type="text" />
      <input className='border-4' type="submit" />
      </form>
    </div>
  )
}

export default UseRef