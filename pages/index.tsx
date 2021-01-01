import Head from 'next/head'

import CandidatesList from '../modules/components/CandidatesList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Live Countdown Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CandidatesList />
    </div>
  )
}
