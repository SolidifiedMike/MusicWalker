import React, { useState } from 'react'

import Tile from '../components/Tile'
import '../App.css'
import useKeyPress from '../utils/useKeyPress';

export default function Road(props) {
  // roadConfig is an array
  const { roadConfig } = props;

  // position on the road
  const [index, setIndex] = useState(0)

  useKeyPress((e) => {
    const myKey = e.key.replace("Arrow", "").toLowerCase();
    if (myKey === "left") {
      // move to left
      setIndex(index - 1);
      e.preventDefault();
    }

    if (myKey === "right") {
      // move to right
      setIndex(index + 1);
      e.preventDefault();
    }
  })

  return (
    <div style={{
      margin: '0 auto',
      overflow: 'hidden',
      width: '100vw',
      whiteSpace: 'nowrap',
    }}>
      <div
        style={{
          transform: `translate3d(${-index * 100}px, 0, 0)`,
          transition: 'ease 200ms'
        }}
      >
        {roadConfig.map((_, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
            }}
          >
            <Tile />
          </div>
        ))}
      </div>
    </div>
  );

}