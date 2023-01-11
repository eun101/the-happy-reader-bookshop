import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className={` ${(open ? 'hidden' : 'block') + ' lg:block' } relative  items-center  py-3 bg-yellow-400 text-gray-900 shadow-lg navbar navbar-expand-lg navbar-light`}>
                
               <div className='shrink-0 flex items-right mx-auto sticky'>
                   <NavLink href="/">
                       <p className=" text-lg pt-3 text-gray-900 hover:text-yellow-300 transition duration-150 ease-in-out">
                           the HAPPYREADER
                       </p>
                   </NavLink>
                   
                   <button
                               onClick={() => setOpen((previousState) => !previousState)}
                               className= {` ${(open ? 'hidden' : 'inline-flex') + ' lg:block'} mx-6 inline-flex items-left p-2 rounded-sm text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                           >

                           </button>
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
                 
               </div>
 
           </nav>
           <div className="min-h-screen bg-emerald-50 flex">
           <nav className={` ${(open ? 'hidden' : 'block') + ' lg:block' } sticky text-medium  left-0 top-0 bottom-0 h-98  p-2 bg-neutral-200 shadow duration-300`}>
               
                
               <div className='shrink-0 flex items-right mx-auto'>
                   <button
                               onClick={() => setOpen((previousState) => !previousState)}
                               className= {` ${(open ? 'hidden' : 'inline-flex') + ' lg:block'} mx-6 inline-flex items-left p-2 rounded-sm text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                           >
                           </button>
               </div>
               <div>
                   <div className="pt-2 space-y-2 ">
                       <div>
                           <NavLink href={route('dashboard.index')} active={route().current('dashboard.index')}>
                               <span className="text-black ">Account Dashboard</span>
                           </NavLink>
                       </div>
                       <div>
                           <NavLink href={route('my-orders.index')} active={route().current('my-orders.index')}>
                               <span className="text-black ">My Orders</span>
                           </NavLink>
                       </div>
                       <div>
                           <NavLink href={route('wishlist.index')} active={route().current('wishlist.index')}>
                               <span className="text-black ">Wishlist</span>
                           </NavLink>
                       </div>
                       <div>
                           <NavLink href={route('address.index')} active={route().current('address.index')}>
                               <span className="text-black ">
                                   Address
                               </span>
                           </NavLink>
                       </div>
                       <div>
                           <NavLink href={route('information.index')} active={route().current('information.index')}>
                               <span className="text-black ">
                                   Account Information
                               </span>
                           </NavLink>
                       </div>
                       <div>
                           <NavLink href={route('billing-details.index')} active={route().current('billing-details.index')}>
                               <span className="text-black ">
                                   Billing Details
                               </span>
                           </NavLink>
                       </div>
                       <div>
                           <NavLink href={route('my-product-reviews.index')} active={route().current('my-product-reviews.index')}>
                               <span className="text-black">
                                  My Product Reviews
                               </span>
                           </NavLink>
                       </div>
                   </div>
               </div>
           </nav>
           <div className=" mx-auto sm:px-6 lg:px-12">
                {header && (
                    <header className="w-full bg-white shadow py-2 sm:px-12 lg:px-12">
                        <div className="flex items-center">
                            <button
                                onClick={() => setOpen((previousState) => !previousState)}
                                className={` ${(open ? 'inline-flex' : 'hidden') + ' lg:hidden'} mx-6 inline-flex items-left rounded-sm text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                            >

                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={` ${(open ? 'inline-flex' : 'hidden') }`}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={` ${(open ? 'inline-flex' : 'hidden')}`}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                            {header}
                        </div>
                    </header>
                )}
                <main className=''>
                    {children}
                </main>
            </div>
        </div>
        </div>
    );
}
