import React from "react";
import Image from "./image.png"

function Landingpage() {
  const redirectToExternalWebsite = () => {
    // Redirect to your existing website URL
    window.location.href = 'http://127.0.0.1:5500/AuthSignIn.html';
  };
  return (
    
      <div
        id="landing"
        className="text-white flex font-semibold w-full h-screen px-[4vw] pt-[13vw] bg-gradient-to-r from-[#124e8c] to-[#051526]"
      >
        <div classname="w-[70vw]">
          <h1 className="text-[9vw] uppercase tracking-tighter ">Inorgadeck</h1>
          <div className="text-[3.1vw] capitalize tracking-tighter">
            When Inorganic Chemistry meets games
          </div>
          <div className="mt-20">
            <button className="text-[4vw] bg-zinc-800 rounded-full py-2 px-10 flex items-center justify-center" onClick={redirectToExternalWebsite}>
              Play Now
            </button>
          </div>
        </div>
        <div className="w-1/2">
            <img src={Image} className="scale-x-[1] ml-[15vw] h-[30vw]"></img>
        </div>
      </div>
    
  );
}

export default Landingpage;
