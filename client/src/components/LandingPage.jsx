// import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-[#070c1b] p-4 sticky top-0">
        <div className="max-w-7xl mx-auto flex justify-start">
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
    <div className="landing-page bg-[#070c1b] h-screen flex justify-center items-center mt-0">
      <div className="text-center">
        <p className="text-4xl mb-10 text-[#a6cfac] italic">Simplify code reviews, amplify results.</p>
        
      
      <div className="grid gap-x-10 grid-cols-3 mb-4 mt-0">
      <div className="bg-black rounded-t-2xl w-[350px] shadow-lg shadow-green-300 h-[300px] border transform transition-transform hover:scale-105 border-[#04364A] flex flex-col items-center justify-center">
      <h1 className="text-lg mb-8 text-[#78A083] italic">Devs</h1>
  <img className="w-28 animate-pulse" src="./src/components/dev.png" alt="logo" />
  <h1 className="text-lg mb-8 ml-3 mr-3 text-[#78A083] italic">Now open just a single tab instead of many to debug your code</h1>
</div>

        <div className="bg-black rounded-t-2xl w-[350px] h-[300px] shadow-lg shadow-orange-300 transform transition-transform hover:scale-105 flex flex-col items-center justify-center border border-[#04364A]">
        <h1 className="text-lg mb-8 mt-3 text-[#A76F6F] italic">Startups</h1>
        <img className="size-28 animate-pulse" src="./src/components/org.png" alt="logo" />
        <h1 className="text-lg mb-8 ml-3 mr-3 text-[#A76F6F] italic">Empowers startups to accelerate interview,deliver exceptional products, and scale efficiently</h1>
        </div>
        <div className="bg-black rounded-t-2xl w-[350px] h-[300px] shadow-lg shadow-[#97E7E1] transform transition-transform hover:scale-105 flex flex-col items-center justify-center border border-[#04364A]">
        <h1 className="text-lg mb-8 mt-8 text-[#97E7E1] italic">Competitive Coders</h1>
        <img className="size-28 animate-pulse" src="./src/components/cpo.png" alt="logo" />
       <h1 className="text-lg mb-8 ml-3 mr-3 text-[#97E7E1] italic">Lightning-fast feedback, optimizing algorithms & suggesting elegant solutions, ensuring they stay ahead of the competition</h1>
        </div>
        
      </div>
      <div className="center-button mt-8">
          <Link to="/app">
            <button className="bg-black border border-[#427D9D] hover:bg-slate-800 text-white py-2 px-4 rounded">Dive In &#x2192;</button>
          </Link>
        </div>
    </div>
    
    
</div>
<div className="landing-page bg-[#070c1b] h-screen flex justify-center items-center">
      
        <div className="text-center">
    </div>
    
    
</div>
</div>
  );
};

export default LandingPage;
