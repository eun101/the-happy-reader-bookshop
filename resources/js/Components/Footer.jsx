import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';


export default function Footer() {

    return (

        <div id="" className="container-fluid bg-gray-800">
            <div className="row mx-auto pl-28 pt-4">
                <div className="col-md-3 text-gray-200 pl-x-5">
                    <h2>Useful Links</h2>
                    <p><Link className='text-gray-400'>Privacy Policy</Link></p>
                    <p  ><Link className='text-gray-400'>Terms of Use</Link></p>
                    <p ><Link className='text-gray-400'>Return Policy</Link></p>
                    <p ><Link className='text-gray-400'>Discount Coupons</Link></p>
                </div>
                <div className="col-md-3 className='text-gray-200 ">
                    <h2 className='text-gray-200'>Our Company</h2>
                    <p><Link className='text-gray-400'>About Us</Link></p>
                    <p  ><Link className='text-gray-400'>Partners</Link></p>
                    <p ><Link className='text-gray-400'>Careers</Link></p>
                    <p ><Link className='text-gray-400'>Affiliate Programs</Link></p>
                </div>
                <div className="col-md-3 text-gray-200 ">
                    <h2  >Follow Us On</h2>
                    <p><Link className='text-gray-400'>Facebook</Link></p>
                    <p  ><Link className='text-gray-400'>Instagram</Link></p>
                    <p ><Link className='text-gray-400'>Youtube</Link></p>
                    <p ><Link className='text-gray-400'>LinkedIn</Link></p>
                </div>
                <div className="col-md-3 footer-image text-gray-200 ">
                    <h2>Download App</h2>
                    <img id="playstore" className="img-fluid" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/goggleapp.png" alt="playstore" />
                    <img id="applestore" className="img-fluid" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/apolstore.png" alt="applestore" />
                </div>
            </div>
            <hr />
            <p className="copyright text-center text-gray-500 ">&#169;theHAPPYReader, All rights reserved 2023</p>
        </div>

    );
}
