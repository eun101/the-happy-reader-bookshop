import React from 'react';
import Challenge from '@/Components/Challenge';
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
                <div>
        <img src= 'https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/banner2.jpg' />    
    </div>
    <div className='absolute text-5xl text-gray-900 top-1/2  left-1/2  -translate-y-1/2'>
    <h1 className='italic pb-2'>
    "Stories you can't miss to uncover <br/>in the magical world of <br/>the Happy Reader"
    </h1>
    <h1 className='non-italic'>
    
    </h1>
    {/* <div>
    <PrimaryButton className='item-center' onClick={showProduct}>
    Tickle Your Happy Hormones Now!
    </PrimaryButton>
    </div> */}
    </div>
            <div id="legacy">
                <div id="company-goals" className="container-fluid">
                <div id="company-objectives" className="row">
                    <div id="mission-content" className="col-md-6">
                        <h2>Mission</h2>
                        <img id="mission" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/target.png"/>
                        <br />
                        <p>
                        The Excelente Learning Academy prepare students to understand, contribute to, and succeed in a rapidly changing
                        society, thus making the world a better and more just place.We will ensure that our students develop both the
                        skill that a sound education provides and the competencies essential for success and leadership in the emerging
                        creative economy.We will also lead in generating practical and theoretical knowledge that enables people
                        to better understand our world and improve conditions for local and global communities.
                        </p>
                    </div>
                    <br/>
                    <div id="vision-content" className="col-md-6">
                        <h2>Vision</h2>
                        <img id="vision" src="https://the-happy-reader-bookshop.s3.ap-southeast-1.amazonaws.com/capstone+assets/Vision.png"/>
                    <br/>
                        <p>Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that
                        will support them, as life-long learners, to participate in and contribute to the global world and 
                        practise the core values of the school: respect, tolerance and inclusion, and excellence.           
                        </p>
                </div>
                    <br/>
                </div>
                </div>
            </div>
            <div  className="container-fluid " id="teams">
                <h1 className="happy">theHAPPYReader Team</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum." 
                </p>
         <br/>
                <div id="team-members" className="row d-flex g-5">
                    <div className="col">
                        <div id="member1" className="card h-100" style={{width: "450px"}}>
                        <img className="card-img-top" src="user1.jpg" alt=""/>
                        <div id="member-role" className="card-body align-items-center">
                            <h6 className="card-title">Eunice Petipit</h6>
                            <h6 className="card-text">FULL STACK DEVELOPER</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div id="member2" className="card h-100" style={{width: "450px"}}>
                    <img className="card-img-top" src="user2.jpg" alt=""/>
                    <div  id="member-role" className="card-body">
                        <h6 className="card-title">Prince Uriel</h6>
                        <h6 className="card-text">BACK-END DEVELOPER</h6>
                    </div>
                    </div>
                </div>
           <div className="col">
               <div id="member3" className="card h-100" style={{width: "450px"}}>
               <img className="card-img-top" src="user2.jpg" alt=""/>
               <div id="member-role" className="card-body">
                   <h6 className="card-title">Lemuel Meneses</h6>
                   <h6 className="card-text">FRONT-END DEVELOPER</h6>
               </div>
               </div>
           </div>
           <div className="col">
               <div id="member4" className="card h-100" style={{width: "450px"}}>
               <img className="card-img-top" src="user2.jpg" alt=""/>
               <div id="member-role" className="card-body">
                   <h6 className="card-title">Mark Estrella</h6>
                   <h6 className="card-text">FRONT-END DEVELOPER</h6>
               </div>
               </div>
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
        <Challenge/>
      <Footer/>
            </MainMenuLayout>
    );
}