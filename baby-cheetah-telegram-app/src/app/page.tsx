'use client'

import dynamic from 'next/dynamic'

const BabyCheetahGame = dynamic(() => import('../BabyCheetahGame'), { ssr: false })

export default function Home() {
  return <BabyCheetahGame />
}