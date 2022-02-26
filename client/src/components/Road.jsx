import React, { useState, useEffect } from "react";
import { synth } from "./Instruments";

import Tile from "../components/Tile";
import ToneEditor from "../components/ToneEditor";

import useKeyPress from "../hooks/useKeyPress";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Road({ roadConfig, setRoadConfig, existedRoad }) {
  const roadLen = roadConfig.length;
  const { height, width } = useWindowDimensions();

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
      }

      if ((myKey === "ArrowRight" || myKey === "d") && index < roadLen - 1) {
        // move to right
        setIndex(index + 1);
        e.preventDefault();
      }
    }

    if (myKey === "Enter") {
      if (openToneEditor) {
        handleCloseToneEditor();
      } else {
        handleOpenToneEditor();
      }
      e.preventDefault();
    }
  });

  return (
    <div>
      <div
        style={{
          margin: "0 auto",
          overflow: "hidden",
          width: "100vw",
          whiteSpace: "nowrap",
        }}
      >
        <img
          src="/sprite/test.gif"
          width={"100px"}
          style={{ marginLeft: width / 2 - 100 }}
        />
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
            <div style={{ marginLeft: width / 2 - 100 }}>
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
  );
}
