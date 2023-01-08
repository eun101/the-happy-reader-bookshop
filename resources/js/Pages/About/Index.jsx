import React from 'react';

export default function About(){
    return (
      <div>
        <div className="row">
        <div className="col">
        <h1 className="about-us">The Company</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum." 
        </p>
        </div>
        <div className="col">
        </div>
        </div>
        <div id="company-objectives" className="row">
          <div id="mission-content" className="col-md-6">
           <h2>Mission</h2>
           <img id="mission" src=""/>
           <p>
           The Excelente Learning Academy prepare students to understand, contribute to, and succeed in a rapidly changing
           society, thus making the world a better and more just place.We will ensure that our students develop both the
           skill that a sound education provides and the competencies essential for success and leadership in the emerging
           creative economy.We will also lead in generating practical and theoretical knowledge that enables people
           to better understand our world and improve conditions for local and global communities.
           </p>
           </div>
            
          <div id="vision-content" className="col-md-6">
          <h2>Vision</h2>
          <img id="vision" src=""/>
          <br/>
          <p>Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that
            will support them, as life-long learners, to participate in and contribute to the global world and 
            practise the core values of the school: respect, tolerance and inclusion, and excellence.           
           </p>
          </div>
          <br />
        </div>
        </div> 
    );
}