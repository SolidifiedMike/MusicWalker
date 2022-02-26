import React from 'react'
import Road from '../components/Road'

export default function MusicPage() {
  const roadConfig = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div>
      <Road roadConfig={roadConfig} />
    </div>
  )
}