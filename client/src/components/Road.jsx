import React, { useState, useEffect } from "react";
import { synth1, synth2, sampler1, sampler2, player } from "./Instruments";
import Tile from "../components/Tile";
import ToneEditor from "../components/ToneEditor";
import useKeyPress from "../hooks/useKeyPress";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import background_1 from "../background/background_1.jpg";
import background_2 from "../background/background_2.png";
import Stack from "@mui/material/Stack";
import background_3 from "../background/background_3.png";

export default function Road({
  roadConfig,
  setRoadConfig,
  existedRoad,
  roadConfigDefault,
}) {
  const navigate = useNavigate();
  const roadLen = roadConfig.length;
  const { height, width } = useWindowDimensions();
  const [isMove, setIsMove] = useState(false);
  const [direction, setDirection] = useState("right");
  const [roadMute, setRoadMute] = useState(false);
  const [beatMute, setBeatMute] = useState(false);
  useEffect(() => {
    player.start(0);
    player.autostart = true;
    player.loop = true;
  }, []);

  useEffect(() => {
    player.mute = beatMute;
  }, [beatMute]);

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
        sampler1.triggerAttackRelease(roadConfig[index]["note"], "16n");
      }
      existedRoad[0].map((road) => {
        const instrument = road.instrument;
        console.log(instrument);
        if (instrument === "synth2") {
          if (road.road[index]["color"] !== "white" && !roadMute) {
            synth2.triggerAttackRelease(road.road[index]["note"], "16n");
          }
        } else if (instrument == "synth1") {
          if (road.road[index]["color"] !== "white" && !roadMute) {
            synth1.triggerAttackRelease(road.road[index]["note"], "16n");
          }
        } else if (instrument == "sampler1") {
          if (road.road[index]["color"] !== "white" && !roadMute) {
            sampler1.triggerAttackRelease(road.road[index]["note"], "16n");
          }
        } else if (instrument == "sampler2") {
          if (road.road[index]["color"] !== "white" && !roadMute) {
            sampler2.triggerAttackRelease(road.road[index]["note"], "16n");
          }
        }
      });
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
        }, 300);
      }
    }
    if (myKey === "Enter" && index != 0) {
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
              width: "350px",
              // height: '300px',s
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 10,
              position: "fixed",
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              style={{
                width: width,
              }}
            >
              <Stack>
                <div
                  style={{
                    fontSize: "20px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                  }}
                >
                  <div style={{ padding: "15px" }}>
                    Use arrows or "A"/"D" to move left or right
                    <br />
                    Press "enter" to add music notes
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "20px",
                    backgroundColor: "#1A7FF3",
                    borderRadius: "20px",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    player.mute = true;
                    navigate("/");
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "15px",
                      paddingright: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Return to the main page
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    backgroundColor: "#1A7FF3",
                    borderRadius: "20px",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      paddingLeft: "15px",
                      paddingright: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Submit your road!
                  </div>
                </div>
              </Stack>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={!roadMute}
                      onChange={(e) => setRoadMute(!e.target.checked)}
                    />
                  }
                  label="Other sounds"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={!beatMute}
                      onChange={(e) => setBeatMute(!e.target.checked)}
                    />
                  }
                  label="BGM"
                />
              </FormGroup>
            </Stack>
          </div>

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
            {existedRoad[0] &&
              existedRoad[0].map((existedRoad) => (
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
                    {existedRoad["road"] &&
                      existedRoad["road"].map((_, index) => (
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
