import React, { useState, useEffect } from "react";
import Axios from "axios";

import CreateSongRoad from "../components/CreateSongRoad";
import JoinSongRoad from "../components/JoinSongRoad";

import useKeyPress from "../hooks/useKeyPress";
import VerticalTile from "../components/VerticalTile";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

import background_1 from "../background/background_1.jpg";
import apiHeader from "../config";

export default function MainPage() {
  const { height, width } = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [move, setMove] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [imgPath, setImgPath] = useState("/sprite/right_stand.gif");
  const navigate = useNavigate();

  useEffect(() => {
    Axios({
      method: "GET",
      url: `${apiHeader}`,
    })
      .then((res) => {
        // console.log(res.data.data);
        // rooms = res.data.data;
        setRooms(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [openCreateSongRoad, setOpenCreateSongRoad] = useState(false);
  const handleOpenCreateSongRoad = () => {
    setOpenCreateSongRoad(true);
  };
  const handleCloseCreateSongRoad = () => {
    setOpenCreateSongRoad(false);
  };

  const [openJoinSongRoad, setOpenJoinSongRoad] = useState(false);
  const handleOpenJoinSongRoad = () => {
    setOpenJoinSongRoad(true);
  };
  const handleCloseJoinSongRoad = () => {
    setOpenJoinSongRoad(false);
  };

  // Move
  useKeyPress((e) => {
    const myKey = e.key;
    if ((myKey === "ArrowUp" || myKey === "w") && index > 0) {
      // move up
      setIndex(index - 1);
      e.preventDefault();
      setImgPath("/sprite/right_walk.gif");
      setTimeout(() => {
        setImgPath("/sprite/right_stand.gif");
      }, 300);
    }

    if ((myKey === "ArrowDown" || myKey === "s") && index < rooms.length - 1) {
      // move down
      setIndex(index + 1);
      e.preventDefault();
      setImgPath("/sprite/right_walk.gif");
      setTimeout(() => {
        setImgPath("/sprite/right_stand.gif");
      }, 300);
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
        caretColor: "transparent",
      }}
    >
      <div
        style={{
          width: "350px",
          // height: '300px',s
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 20,
        }}
      >
        <div
          style={{
            fontSize: "20px",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <br />
          <div style={{ margin: "20px" }}>
            Use arrows or "W"/"A" to move up or down
          </div>
          <div style={{ margin: "20px" }}>
            Press "enter" to enter a song road!
          </div>
          <br />
        </div>

        <div
          style={{
            fontSize: "20px",
            backgroundColor: "#1A7FF3",
            borderRadius: "20px",
            marginTop: "40px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleOpenCreateSongRoad();
          }}
        >
          <div style={{ margin: "20px", color: "white", padding: "10px" }}>
            Click here to create a new song road!
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
            handleOpenJoinSongRoad();
          }}
        >
          <div style={{ margin: "20px", color: "white", padding: "10px" }}>
            Click here to join a song road!
          </div>
        </div>
      </div>

      <div
        style={{
          height: "100vh",
          weight: "500px",
        }}
      >
        <img
          src={imgPath}
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
          {rooms.map((room, i) => {
            return (
              <VerticalTile
                isActive={index === i}
                roomName={room.roomName}
                author={room.author}
              />
            );
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

      <CreateSongRoad
        openCreateSongRoad={openCreateSongRoad}
        handleCloseCreateSongRoad={handleCloseCreateSongRoad}
      />
      <JoinSongRoad
        openJoinSongRoad={openJoinSongRoad}
        handleCloseJoinSongRoad={handleCloseJoinSongRoad}
      />
    </div>
  );
}
