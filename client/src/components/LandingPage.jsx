// import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpButton } from "@clerk/clerk-react";

const Navbar = () => {
    return (
      <nav className="bg-transparent p-4 sticky top-0 mt-0">
        <div className="max-w-7xl flex justify-start">
            <img className="size-14" src="./src/components/ss.png" alt="logo" />
        <div className="text-[#427D9D] font-bold text-4xl font-mono">QUILL</div>
         {/* <button className="text-slate-100  text-lg font-mono mb-4">GitHub</button> */}
        </div>
      </nav>
    );
  };

const LandingPage = () => {
  return (
    <div>
        <Navbar />
    <div className="landing-page h-screen flex justify-center items-center mt-0">
   
      <div className="text-center">
        <h1 className="text-6xl mb-10 text-[#ffffff] font-space typewriter">AI-Powered Code Critic:</h1>
        <h1 className="text-4xl mb-10 text-[#ffffff] font-space italic">Elevate Your Dev Game!</h1>
        <div className="center-button mt-8">
          <Link to="/app">
          <SignUpButton mode="modal">
            <button className="bg-rose-900 border-dashed border-[#feffff] hover:bg-slate-800 text-white font-bold py-2 px-4 rounded size-20 font-mono text-lg">Dive In &#x2192;</button>
            </SignUpButton>
          </Link>
        </div>
    </div>
    
    
</div>
<div className=" bg-[#070c1b] h-screen flex justify-center items-center">
      
        <div className="text-center">
        <div className="grid gap-x-10 grid-cols-3 mb-4 mt-0">
      <div className="bg-black rounded-t-2xl w-[350px] shadow-lg shadow-green-300 h-[300px] border-dashed transform transition-transform hover:scale-105 border-[#04364A] flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-8 text-[#78A083] font-space">Devs</h1>
  <img className="w-28 animate-pulse" src="./src/components/dev.png" alt="logo" />
  <h1 className="text-lg mb-8 ml-3 mr-3 text-[#78A083] italic font-light">Now open just a single tab instead of many to debug your code</h1>
</div>

        <div className="bg-black rounded-t-2xl w-[350px] shadow-lg shadow-red-300 h-[300px] border-dashed transform transition-transform hover:scale-105 border-[#04364A] flex flex-col items-center justify-center">
        <h1 className="text-xl mb-8 mt-3 text-[#A76F6F] font-space">Startups</h1>
        <img className="size-28 animate-pulse" src="./src/components/org.png" alt="logo" />
        <h1 className="text-lg mb-8 ml-3 mr-3 text-[#A76F6F] italic font-thin">Empowers startups to accelerate interview,deliver exceptional products, and scale efficiently</h1>
        </div>
        <div className="bg-black rounded-t-2xl w-[350px] shadow-lg shadow-cyan-300 h-[300px] border-dashed transform transition-transform hover:scale-105 border-[#04364A] flex flex-col items-center justify-center">
        <h1 className="text-xl mb-8 mt-8 text-[#97E7E1] font-space">Competitive Coders</h1>
        <img className="size-28 animate-pulse" src="./src/components/cpo.png" alt="logo" />
       <h1 className="text-lg mb-8 ml-3 mr-3 text-[#97E7E1] italic font-thin">Lightning-fast feedback, optimizing algorithms & suggesting elegant solutions, ensuring they stay ahead of the competition</h1>
        </div>
        
      </div>
    </div>
  
    
</div>
</div>
  );
};

export default LandingPage;
