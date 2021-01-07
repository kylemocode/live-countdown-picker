import Head from 'next/head'

import CandidatesList from '../modules/components/CandidatesList';
import Timer from '../modules/components/Timer';
import PickedResult from '../modules/components/PickedResult';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Live Countdown Picker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Timer />
      <PickedResult />
      <CandidatesList />
    </div>
  )
}
