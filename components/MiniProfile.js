import React from 'react'
import { signOut , useSession } from "next-auth/react";
function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='w-16 h-16 rounded-full border p-[2px]' 
      src="https://media-exp1.licdn.com/dms/image/C4D03AQEAaTRGf_fqPA/profile-displayphoto-shrink_800_800/0/1517075879054?e=1652313600&v=beta&t=mPariNtavUGnRgZDtrXXCBwaQPYszxwmte6UxQ9kZ2s" 
      alt="Profile picture"/>

      <div className='flex-1 mx-3'>
        <h2 className='font-bold'>Kate Kiatsiri</h2>
        <h3 className='text-sm text-gray-400'>Jr.Software Engineer</h3>
      </div>

      <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile;