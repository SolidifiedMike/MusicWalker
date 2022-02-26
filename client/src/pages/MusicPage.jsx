import React from 'react';
import Road from '../components/Road';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useState } from 'react';

export default function MusicPage() {
  const { height, width } = useWindowDimensions();

  // MockData
  const existedRoad = [
    {
      author: 'Mike',
      road: [
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'Red' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'Red' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'Red' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'Red' },
      ],
    },
    {
      author: 'Ray',
      road: [
        { color: 'grey' },
        { color: 'Red' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'Red' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'grey' },
        { color: 'orange' },
        { color: 'grey' },
      ],
    },
  ];

  const roadConfigDefault = [
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
    { color: 'white', note: '' },
  ];
  const [roadConfig, setRoadConfig] = useState(roadConfigDefault);
  return (
    <div>
      <div
        style={{
          marginTop: height / 4,
        }}
      >
        <Road
          roadConfig={roadConfig}
          setRoadConfig={setRoadConfig}
          existedRoad={existedRoad}
        />
      </div>
    </div>
  );
}
