import React from 'react'
import { getProviders, signIn as SignIntoProvider }  from "next-auth/react";
import Header from '../../components/Header';

//Browser
function signIn({providers}) {
  return (
    <>
    <Header />
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-60 px-14 text-center'>
      <img className='w-80' src="https://links.papareact.com/ocw" alt="IG icon"/>
      <p className='font-xs italic'>Welcome to my project!!</p>

      <div className='mt-40'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className='p-3 bg-blue-500 rounded-lg text-white' 
            onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'})}>
              Sign in with {provider.name}
            </button>  
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

// Server
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers }
  }
}


export default signIn;


// instagram https://links.papareact.com/ocw
// drinking buddy logo https://cdn.shopify.com/s/files/1/0056/7961/1975/products/Screen_Shot_2019-05-10_at_2.42.06_PM_1200x.png?v=1557517441
//  {callbackUrl: '/'} back to the homepage