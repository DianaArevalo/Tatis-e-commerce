import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export function Order() {
  return (
    <div>
        <div className='w-full h-screen flex justify-center items-center'>
      <div className='space-y-5 flex flex-col justify-center items-center'>
        <h1 className='text-xl font-semibold'> No tienes productos ordenados </h1>
        <NavLink to='/'>
        <button className='bg-fuchsia-950 text-white px-5 py-2 rounded-m  drop-shadow-xl flex items-center space-x-2 '>
          <span> Regresa a la tienda</span>
          <BsArrowLeft/>
        </button>
        </NavLink>
       
      </div>
    </div>
    </div>
  )
}
