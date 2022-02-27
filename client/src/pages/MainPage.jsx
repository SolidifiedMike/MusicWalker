import React, { useState } from 'react';

import useKeyPress from '../hooks/useKeyPress';
import VerticalTile from "../components/VerticalTile";
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const [index, setIndex] = useState(0);
  const [move, setMove] = useState(false);
  const navigate = useNavigate();

  const roads = [1, 1, 1, 1, 1, 1, 1, 1];

  // Move
  useKeyPress((e) => {
    const myKey = e.key;
    if ((myKey === 'ArrowUp' || myKey === 'w') && index > 0) {
      // move up
      setIndex(index - 1);
      e.preventDefault();
    }

    if ((myKey === 'ArrowDown' || myKey === 's') && index < roads.length - 1) {
      // move down
      setIndex(index + 1);
      e.preventDefault();
    }

    if (myKey === "Enter") {
      setMove(true);
      setTimeout(() => {
        navigate('/road');
      }, 2000)
    }
  });

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '350px',
        // height: '300px',
        paddingLeft: 50,
        paddingTop: 100
      }}>
        <div>
          Use arrows or "W"/"A" to move up or down
        </div>
        <br />
        <div>
          Press "enter" to enter a song road!
        </div>
      </div>

      <div style={{
        height: '100vh',
        weight: '500px',
      }}>
        <img
          src="/sprite/test.gif"
          width={'100px'}
          height={'100px'}
          style={{
            position: 'absolute',
            zIndex: 10,
            marginTop: '240px',
            transform: move ? 'translateX(2000px)' : 'translateX(-20px)',
            transition: 'linear 2s'
          }}
        />
        <div style={{
          transform: `translate3d(0, ${-index * 200}px, 0)`,
          transition: 'ease 200ms',
        }}>
          <div style={{
            width: '50px',
            height: '220px',
            backgroundColor: 'black',
            flexShrink: '0',
          }} />
          {roads.map((_, i) => {
            return (<VerticalTile isActive={index === i} />)
          })}
          <div style={{
            width: '50px',
            height: '500px',
            backgroundColor: 'black',
            flexShrink: '0',
          }} />

        </div>
      </div>
    </div >
  )
}