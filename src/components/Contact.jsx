import React from 'react';

function Contact() {
  return (
    <div id='contact' className='border-t-2 border-zinc-300 py-[4vw] px-[4vw] w-full bg-gradient-to-r from-[#1775cd] to-[#68b4d8] text-white font-semibold'>
      <h1 className='tracking-tighter text-[6vw] underline underline-offset-8 decoration-2'>Contact Us</h1>

      {/* Styling for Name and Email */}
      <p className='tracking-tighter text-[3vw]'>Harshit Agarwal - 22BCE3773<span className="text-gray-500"> - harshit.agarwal2022@vitstudent.ac.in</span></p>
      <p className='tracking-tighter text-[3vw]'>Rakshit Jangid - 22BCE0429<span className="text-gray-500"> - rakshit.jangid2022@vitstudent.ac.in</span></p>
      <p className='tracking-tighter text-[3vw]'>Tashi Sharma - 22BCE0076<span className="text-gray-500"> - tashi.sharma2022@vitstudent.ac.in</span></p>
    </div>
  );
}

export default Contact;
