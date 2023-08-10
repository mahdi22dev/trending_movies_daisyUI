"use client";
import { links } from "@/constans/constans";
import Link from "next/link";
import React from "react";
import { SlMenu } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className='navbar bg-base-200 min-h-[5rem]  z-50 sticky top-0 justify-between'>
      <div className='flex-1'>
        <Link
          href={"/"}
          className='btn btn-ghost text-primary hover:bg-pink-100 normal-case text-xl'
        >
          MTrending
        </Link>
      </div>
      <div className='drawer drawer-end flex-1 '>
        <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content  m-5 mt-7 justify-self-end'>
          <label htmlFor='my-drawer-4' className='drawer-button cursor-pointer'>
            <SlMenu className='w-full h-full text-xl text-primary' />
          </label>
        </div>
        <div className='drawer-side transition-transform duration-1000 '>
          <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
          <ul className='menu pt-20 pl-1 p-10 w-80 h-full bg-base-200 text-base-content'>
            {links.map((link) => {
              return (
                <li className='hover:pl-3 transition-all '>
                  <Link className='hover:text-primary' href={"/"}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
