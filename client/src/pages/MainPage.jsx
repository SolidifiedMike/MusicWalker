import React, { useState } from 'react';

import useKeyPress from '../hooks/useKeyPress';
import VerticalTile from "../components/VerticalTile";

export default function MainPage() {
  const [index, setIndex] = useState(0);
  const roads = [1, 1, 1, 1, 1, 1, 1, 1];

  // Move
  useKeyPress((e) => {
    const myKey = e.key;
    if ((myKey === 'ArrowUp' || myKey === 'w')) {
      // move up
      setIndex(index - 1);
      e.preventDefault();
    }

    if ((myKey === 'ArrowDown' || myKey === 's')) {
      // move down
      setIndex(index + 1);
      e.preventDefault();
    }
  });

  return (
    <div style={{
      // width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <img
        src="/sprite/test.gif"
        width={'100px'}
        height={'100px'}
        style={{
          position: 'absolute',
          zIndex: 10,
          marginTop: '220px'
        }}
      />
      <div style={{
        transform: `translate3d(0, ${-index * 200 + 200}px, 0)`,
        transition: 'ease 200ms',
      }}>
        {roads.map((_, i) => {
          return (<VerticalTile isActive={index === i} />)
        })}
      </div>
    </div>

  )
}