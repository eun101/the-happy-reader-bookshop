import { Link, Head } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import Dropdown from '@/Components/Dropdown';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import GuestLayout from '@/Layouts/GuestLayout';
import MainMenuLayout from '@/Layouts/MainMenuLayout';


export default function Welcome(props) {
    return (
        <MainMenuLayout>
            <div>
                <div className="">
                          
                           
                
                   <div className='flex'>
                    <img src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/banner1.png" alt="hero-banner" className='w-auto'/>
                   </div>



                   
             <div className="fixed top-0 right-0 px-6  sm:block">
                    {props.auth.user ?
                    <div className='pt-2 space-x-12 flex '>
                    
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                        <Link href={route('logout')} method="post" as="button" className="text-sm text-gray-700 dark:text-gray-500 underline">
                        Logout
                        </Link>
                    </div> : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
               
                


            <section className='hero-banner'>
                <div className='container'>
                    <div>
                       --Banner Here --
                    </div>

                    <Button className='shop-now'>
                        Shop Now

                    </Button>
                </div>
            </section>
            </div>
           </div>
           </MainMenuLayout>
    );
}