import React, { useState, useEffect } from "react";
import { synth } from "./Instruments";

import Tile from "../components/Tile";
import ToneEditor from "../components/ToneEditor";

import useKeyPress from "../hooks/useKeyPress";
import useWindowDimensions from "../hooks/useWindowDimensions";

import background_1 from "../background/background_1.jpg";
import background_2 from "../background/background_2.png";
import background_3 from "../background/background_3.png";

export default function Road({ roadConfig, setRoadConfig, existedRoad }) {
  const roadLen = roadConfig.length;
  const { height, width } = useWindowDimensions();
  const [isMove, setIsMove] = useState(false);
  const [direction, setDirection] = useState("right");

  // position on the road
  const [index, setIndex] = useState(0);

  //Tone editor
  const [openToneEditor, setOpenToneEditor] = useState(false);
  const handleOpenToneEditor = () => {
    setOpenToneEditor(true);
  };
  const handleCloseToneEditor = () => {
    setOpenToneEditor(false);
  };
  const editTileTone = (index, color, note) => {
    let newRoadConfig = [...roadConfig];
    newRoadConfig[index]["color"] = color;
    newRoadConfig[index]["note"] = note;
    setRoadConfig(newRoadConfig);
  };

  //Play Tone
  useEffect(() => {
    if (index > 0) {
      if (roadConfig[index]["color"] !== "white") {
        synth.triggerAttack(roadConfig[index]["note"], "16n");
        synth.triggerRelease();
      }
    }
  }, [index]);

  // Move
  useKeyPress((e) => {
    const myKey = e.key;
    if (!openToneEditor) {
      if ((myKey === "ArrowLeft" || myKey === "a") && index > 0) {
        // move to left
        setIndex(index - 1);
        e.preventDefault();
        setDirection("left");
        setIsMove(true);

        setTimeout(() => {
          setIsMove(false);
          console.log("time out");
        }, 300);
      } else if (
        (myKey === "ArrowRight" || myKey === "d") &&
        index < roadLen - 1
      ) {
        // move to right
        setIndex(index + 1);
        e.preventDefault();
        setDirection("right");
        setIsMove(true);
        setTimeout(() => {
          setIsMove(false);
          console.log("time out");
        }, 300);
      }
    }
    if (myKey === "Enter") {
      if (!openToneEditor) {
        handleOpenToneEditor();
      }
      setIsMove(false);
      e.preventDefault();
    }
  });

  return (
    <div
      style={{
        height: height - 1,
        backgroundImage: `url(${background_1})`,
        backgroundSize: "cover",
        caretColor: "transparent",
      }}
    >
      <div
        style={{
          height: height - 1,
          backgroundImage: `url(${background_2})`,
          backgroundSize: "cover",
          backgroundPositionX: width - 10 * index,
          transition: "linear 200ms",
        }}
      >
        <div
          style={{
            height: height - 1,
            backgroundImage: `url(${background_3})`,
            backgroundSize: "cover",
            backgroundPositionX: width - 50 * index,
            transition: "linear 200ms",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              overflow: "hidden",
              width: "100vw",
              whiteSpace: "nowrap",
            }}
          >
            <div style={{ height: "70px", marginTop: height / 4 }}>
              {!isMove && direction === "right" && (
                <img
                  src="/sprite/right_stand.gif"
                  width={"100px"}
                  style={{ marginLeft: width / 2 - 100 }}
                />
              )}
              {!isMove && direction === "left" && (
                <img
                  src="/sprite/left_stand.gif"
                  width={"100px"}
                  style={{ marginLeft: width / 2 - 100 }}
                />
              )}
              {isMove && direction === "right" && (
                <img
                  src="/sprite/right_walk.gif"
                  width={"100px"}
                  style={{ marginLeft: width / 2 - 100 }}
                />
              )}
              {isMove && direction === "left" && (
                <img
                  src="/sprite/left_walk.gif"
                  width={"100px"}
                  style={{ marginLeft: width / 2 - 100 }}
                />
              )}
            </div>
            <div
              style={{
                transform: `translate3d(${-index * 100}px, 0, 0)`,
                transition: "ease 200ms",
                marginLeft: width / 2 - 100,
              }}
            >
              {roadConfig.map((_, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                  }}
                >
                  <Tile tileInfo={roadConfig[index]} />
                </div>
              ))}
            </div>
            <br />
            {existedRoad.map((existedRoad) => (
              <div key={existedRoad["author"]}>
                <div
                  style={{
                    transform: `translate3d(${-index * 100}px, 0, 0)`,
                    transition: "ease 200ms",
                    marginLeft: width / 2 - 100,
                  }}
                >
                  {existedRoad["author"]}
                </div>
                <div
                  style={{
                    transform: `translate3d(${-index * 100}px, 0, 0)`,
                    transition: "ease 200ms",
                    marginLeft: width / 2 - 100,
                  }}
                >
                  {existedRoad["road"].map((_, index) => (
                    <div
                      key={existedRoad["author"] + String(index)}
                      style={{
                        display: "inline-block",
                      }}
                    >
                      <Tile tileInfo={existedRoad["road"][index]} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ToneEditor
            openToneEditor={openToneEditor}
            handleCloseToneEditor={handleCloseToneEditor}
            editTileTone={editTileTone}
            index={index}
          />
        </div>
      </div>
    </div>
  );
}
