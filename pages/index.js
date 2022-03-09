// import type { NextPage } from 'next'
// import Image from 'next/image'
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header  />  
      <Feed />

      {/* Feed */}


      {/* Modal */}
    </div>
  );
}


