import Image from 'next/image';
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
      {/* {Left} */}
      <div className='relative hidden lg:inline-grid h-24 w-24'>
        <Image src='http://links.papareact.com/ocw' 
        layout='fill'
        objectFit='contain'/>
      </div>

      <h1>Hello world</h1>
      {/* {Middle} */}




      {/* {Right} */}


      </div>
    </div>
  );
}

export default Header