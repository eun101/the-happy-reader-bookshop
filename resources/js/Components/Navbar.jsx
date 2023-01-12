import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import Footer from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Navbar (){
    
    return (
<div className="pt-2 space-x-12 flex ">
<NavLink href={route('dashboard')} active={route().current('dashboard')}>
    <span className="text-black ">SHOP</span>
</NavLink>
<NavLink href={route('orders.index')} active={route().current('myorders.index')}>
    <span className="text-black ">CONTACT US</span>
</NavLink>
<NavLink href={route('orders.index')} active={route().current('orders.index')}>
    <span className="text-black ">ABOUT US</span>
</NavLink>
<NavLink href={route('orders.index')} active={route().current('blogs.index')}>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
 </svg>
</NavLink>
<Dropdown className="">
<Dropdown.Trigger>
<span className=" rounded-small pt-5 ">
 <button
     type="button"
     className=" inline-flex items-center mx-auto px-4 py-2 border border-transparent text-small leading-4 font-small rounded-md text-gray-500 bg-white hover:text-amber-300 focus:outline-none transition ease-in-out duration-150"
 >
     {auth.user.name}

     <svg
         className="ml-2 -mr-0.5 h-4 w-4"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         xml:space="preserve"
         version="1.1"
         id="Icons"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 10 32"
         strokeWidth={2}
     >

         <g id="SVGRepo_bgCarrier" stroke-width="0">
         </g>
         <g id="SVGRepo_iconCarrier"> <g>
             <path d="M16,10c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S14.3,10,16,10z"></path> <path d="M16,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,13,16,13z"></path>
             <path d="M16,22c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S17.7,22,16,25z"> </path></g> </g>
     </svg>
 </button>
</span>
</Dropdown.Trigger>

<Dropdown.Content>
<Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
<Dropdown.Link href={route('logout')} method="post" as="button">
 Log Out
</Dropdown.Link>
</Dropdown.Content>
</Dropdown>
</div>
);

}