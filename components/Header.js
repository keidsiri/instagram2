import Image from 'next/image';
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div className='flex justify-between max-w-6xl'>
      {/* {Left} */}
      <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
        <Image src='http://links.papareact.com/ocw' 
        layout='fill'
        objectFit='contain'/>
      </div>

      <div className='relative h-10 w-10 lg:hidden flex-shrink-0 cursor-pointer'>
        <Image src='http://links.papareact.com/jjm' 
        layout='fill'
        objectFit='contain'/>
      </div>


      {/* {Middle - Search input field} */}
      <div className='mt-1'>
        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
        <SearchIcon  className='h-5 w-5 text-gray-500'/>
        </div>
        <input type="text" placeholder='Search'/>
      </div>



      {/* {Right} */}


      </div>
    </div>
  );
}

export default Header