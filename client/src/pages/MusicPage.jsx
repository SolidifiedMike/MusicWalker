import React from 'react';
import Road from '../components/Road';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useState } from 'react';

export default function MusicPage() {
  const { height, width } = useWindowDimensions();

  const roadConfigDefault = [
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
    { color: 'white' },
  ];
  const [roadConfig, setRoadConfig] = useState(roadConfigDefault);
  return (
    <div>
      <div
        style={{
          marginTop: height / 4,
        }}
      >
        <Road roadConfig={roadConfig} setRoadConfig={setRoadConfig} />
      </div>
    </div>
  );
}
