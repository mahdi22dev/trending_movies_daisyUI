"use client";
import React from "react";
import { SlMenu } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className='navbar bg-base-200 min-h-[5rem] z-50 sticky top-0 justify-between'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>MTrending</a>
      </div>
      <div className='drawer drawer-end flex-1 '>
        <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content  m-5 mt-7 justify-self-end'>
          <label htmlFor='my-drawer-4' className='drawer-button cursor-pointer'>
            <SlMenu className='w-full h-full text-xl' />
          </label>
        </div>
        <div className='drawer-side transition-transform duration-1000 '>
          <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
          <ul className='menu pl-1 p-10 w-80 h-full bg-base-200 text-base-content'>
            <li className='hover:pl-3 transition-all '>
              <a>Sidebar Item 1</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
