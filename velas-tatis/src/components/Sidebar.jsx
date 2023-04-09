import React from 'react'
import {HiOutlineMenuAlt2, HiOutlineHome} from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import{CiShoppingCart, CiDeliveryTruck} from 'react-icons/ci'
import {IoHeartOutline} from 'react-icons/io5'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed top-0 let-0 h-screen p-2 bg-rose-100'>
      <ul className='p-5 space-y-8'>
        <li>
          <button>
            <HiOutlineMenuAlt2 size={'1.5rem'}/>
          </button>
        </li>

        <li>
          <NavLink to='/cart'>
          <button>
            <CiShoppingCart size={'1.5rem'}/>
          </button>
          </NavLink>         
        </li>

        <li>
          <NavLink to='/'>
          <button>
            <HiOutlineHome size={'1.5rem'}/>
          </button>
          </NavLink>
        </li>

        <li>
          <NavLink to='/favs'>
          <button>
            <IoHeartOutline size={'1.5rem'}/>
          </button>
          </NavLink>          
        </li>

        <li>
          <NavLink to='/orders'>
          <button>
            <CiDeliveryTruck size={'1.5rem'}/>
          </button>            
          </NavLink>          
        </li>

        <li>
          <button>
            <BiUser size={'1.5rem'}/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar