import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='w-16 h-16 rounded-full border p-[2px]' src="https://media-exp1.licdn.com/dms/image/C4D03AQEAaTRGf_fqPA/profile-displayphoto-shrink_800_800/0/1517075879054?e=1652313600&v=beta&t=mPariNtavUGnRgZDtrXXCBwaQPYszxwmte6UxQ9kZ2s" alt="Profile picture"/>
      <div>
        <h2>Kate Kiatsiri</h2>
        <h3>What's up everyone?</h3>
      </div>

      <button>Sign Out</button>
    </div>
  )
}

export default MiniProfile;