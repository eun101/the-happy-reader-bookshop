import React from 'react';
import JoinBanner from '@/Components/JoinBanner';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';
import MainMenuLayout from '@/Layouts/MainMenuLayout';




export default function AboutUs() {
    return (
        <MainMenuLayout>
            {/* <div className="container-fluid">
                <div style={{backgroundImage:"url(./banner2.jpg)",backgroundSize:"cover"}}id="banner" className="row vh-100">
                    <div className="col">
                        <h1 className="about-us">The Company</h1>
                        <h5>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum." 
                        </h5>
                    </div>
                    <div className="col"></div>
                </div>
            </div> */}
            <div className=''>


                <img src='https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/about-us.png' className="" />
            </div>
            <h1 className="p-5 text-center">ABOUT US</h1>
            <div id="legacy">
                     
                <div id="company-goals" className="container-fluid">
                    
                    <div id="company-objectives" className="row">
                        <div id="mission-content" className="col-md-6 mx-auto py-12">
                            <h2 className='text-center text-gray-100'>Mission</h2>
                            <img id="mission" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/missionfin.png" className="w-1/3 mx-auto " />
                            <br />
                            <p className='text-center text-gray-100 text-xl'>
                                Spreading happiness one book at a time.
                            </p>
                        </div>
                        <br />
                        <div id="vision-content" className="col-md-6 mx-auto pt-5 ">
                            <h2 className='text-center text-gray-100'>Vision</h2>
                            <img id="vision" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/visionfin.png" className="mx-auto w-1/3" />
                            <br />
                            <p className='text-center text-gray-100 text-xl pb-5'>  To create a community of readers and writers<br /> who share the same passion for books.
                            </p>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <h1 className='pt-12' style={{ textAlign: "center", color: "black" }}>The Story</h1>
            <div className="work_experience bg-sky-100">
                <div className="milestone container">
                   
                    <div className="row">
                        <div className="col text-end">
                            <div className="pt-12 px-5">
                                <h2>2010</h2>
                                <h5>
                                    It all started with a simple idea. A group of friends who love to read and write decided to create a community where they can share their love for books.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col order-last">
                            <div className="px-5">
                                <h2>2014</h2>
                                <h5>
                                    The enjoy what they do and so they decided to share their passion with others.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <div className="px-5">
                                <h2>2016</h2>
                                <h5>
                                    More book lovers joined the community and the community grew bigger and bigger.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col order-last">
                            <div className="px-5">
                                <h2>2018</h2>
                                <h5>
                                    Every year the community organizes book fairs and book launches to promote reading and writing.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <div className="px-5">
                                <h2>2020</h2>
                                <h5>
                                    There are so much to learn from books and the community wants to share that to everyone. They planned to open a bookshop.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col order-last ">
                            <div className="px-5">
                                <h2>2022</h2>
                                <h5>
                                    The ideas are slowly becoming a reality. The community is now ready to share their love for books to everyone.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <div className="px-5">
                                <h2>2023</h2>
                                <h5>
                                    Now their website is ongoing and many are excited to be part of it.
                                </h5>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>

            </div>






            <JoinBanner />
        </MainMenuLayout>
    );
}