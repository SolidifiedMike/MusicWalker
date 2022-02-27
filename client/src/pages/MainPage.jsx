import React, { useState } from "react";

import useKeyPress from "../hooks/useKeyPress";
import VerticalTile from "../components/VerticalTile";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

import background_1 from "../background/background_1.jpg";

export default function MainPage() {
  const { height, width } = useWindowDimensions();
  console.log(width);

  const [index, setIndex] = useState(0);
  const [move, setMove] = useState(false);
  const navigate = useNavigate();

  const roads = [1, 1, 1, 1, 1, 1, 1, 1];

  // Move
  useKeyPress((e) => {
    const myKey = e.key;
    if ((myKey === "ArrowUp" || myKey === "w") && index > 0) {
      // move up
      setIndex(index - 1);
      e.preventDefault();
    }

    if ((myKey === "ArrowDown" || myKey === "s") && index < roads.length - 1) {
      // move down
      setIndex(index + 1);
      e.preventDefault();
    }

    if (myKey === "Enter") {
      setMove(true);
      setTimeout(() => {
        navigate("/road");
      }, 1000);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        overflow: "hidden",
        height: height - 1,
        backgroundImage: `url(${background_1})`,
        backgroundSize: width,
      }}
    >
      <div
        style={{
          width: "350px",
          // height: '300px',
          paddingLeft: 50,
          paddingTop: 100,
        }}
      >
        <div>Use arrows or "W"/"A" to move up or down</div>
        <br />
        <div>Press "enter" to enter a song road!</div>
      </div>

      <div
        style={{
          height: "100vh",
          weight: "500px",
        }}
      >
        <img
          src="/sprite/right_stand.gif"
          width={"96px"}
          height={"68px"}
          style={{
            position: "absolute",
            zIndex: 10,
            marginTop: "260px",
            transform: move
              ? `translateX(${width * 0.75}px)`
              : "translateX(-20px)",
            transition: "linear 1s",
          }}
        />
        <div
          style={{
            transform: `translate3d(0, ${-index * 200}px, 0)`,
            transition: "ease 200ms",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "220px",
              backgroundColor: "white",
              flexShrink: "0",
            }}
          />
          {roads.map((_, i) => {
            return <VerticalTile isActive={index === i} />;
          })}
          <div
            style={{
              width: "50px",
              height: "500px",
              backgroundColor: "white",
              flexShrink: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
}
