import React from 'react'
import { getProviders, signIn }  from "next-auth/react";

//Browser
function signIn() {
  return (
    <div>I'm the sign in page</div>
  )
}

// Server
export async function getServerSideProps() {
  const providers = getProviders();

  return {
    props: {
      providers
    }
  }
}


export default signIn