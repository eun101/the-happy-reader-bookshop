import React from 'react';
import JoinBanner from '@/Components/JoinBanner';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';
import MainMenuLayout from '@/Layouts/MainMenuLayout';




export default function AboutUs(){
    return (
            <MainMenuLayout>
            {/* <div className="container-fluid">
                <div style={{backgroundImage:"url(./banner2.jpg)",backgroundSize:"cover"}}id="banner" className="row vh-100">
                    <div className="col">
                        <h1 className="about-us">The Company</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum." 
                        </p>
                    </div>
                    <div className="col"></div>
                </div>
            </div> */}
                <div className=''>

                <h1 className="p-5 text-center">ABOUT US</h1>
        <img src= 'https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/banner2.jpg' className="h-96 w-full object-cover object-center" />    
    </div>
    <div className='absolute text-5xl text-gray-900 top-1/2  left-1/2  -translate-y-1/2'>
    </div>

    <div className="why-content">
                </div>
            <div id="legacy">
                <div id="company-goals" className="container-fluid">
                <div id="company-objectives" className="row">
                    <div id="mission-content" className="col-md-6 mx-auto pt-5 pb-5">
                        <h2 className='text-center text-gray-100'>Mission</h2>
                        <img id="mission" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/missionfin.png" className="w-1/3 mx-auto " />
                        <br />
                        <p className='text-center text-gray-100 text-xl'>
                    Spreading happiness one book at a time.
                        </p>
                    </div>
                    <br/>
                    <div id="vision-content" className="col-md-6 mx-auto pt-5 ">
                        <h2 className='text-center text-gray-100'>Vision</h2>
                        <img id="vision" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/visionfin.png" className="mx-auto w-1/3"/>
                    <br/>
                        <p className='text-center text-gray-100 text-xl'>  To create a community of readers and writers<br/> who share the same passion for books.          
                        </p>
                </div>
                    <br/>
                </div>
                </div>
            </div>
            <div className="work_experience">
            <div className="milestone container pt-2  pb-5">
                <h1 style={{textAlign:"center",color:"black"}}>The Story</h1>
                <div className="row">
                <div className="col text-end">
                <div className="">
                    <h4>2010</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>    
                </div>
               <div className="col"></div>
                </div>
            <div className="row">
                <div className="col order-last">
                <div className="">
                    <h4>2015</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                </div>
               <div className="col"></div>
            </div>
            <div className="row">
                <div className="col text-end">
                <div className="">
                    <h4>2010</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                </div>
               <div className="col"></div>
                </div>
                <div className="row">
                <div className="col order-last">
                <div className="">
                    <h4>2018</h4>
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                   </p>
                </div>
                </div>
               <div className="col"></div>
            </div>
            <div className="row">
                <div className="col text-end">
                <div className="">
                    <h4>2016</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                </div>
               <div className="col"></div>
                </div>
                <div className="row">
                <div className="col order-last ">
                <div className="">
                    <h4>2019</h4>
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                   </p>
                </div>
                </div>
               <div className="col"></div>
            </div>  
            <div className="row">
                <div className="col text-end">
                <div className="">
                    <h4>2022</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                </div>
               <div className="col"></div>
            </div> 
        </div>
     </div>

     

     
        <JoinBanner/>
            </MainMenuLayout>
    );
}