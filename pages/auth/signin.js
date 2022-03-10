import React from 'react'
import { getProviders, signIn as SignIntoProvider }  from "next-auth/react";

//Browser
function signIn() {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// Server
export async function getServerSideProps() {
  const providers = getProviders();

  return {
    props: { providers }
  }
}


export default signIn