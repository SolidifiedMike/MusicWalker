import React from "react";
import Road from "../components/Road";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import apiHeader from "../config";
export default function MusicPage() {
  const { id } = useParams();
  const [existedRoadData, setExistedRoadData] = useState([]);
  useEffect(() => {
    Axios({
      method: "GET",
      url: `${apiHeader + "/" + id}`,
    })
      .then((res) => {
        setExistedRoadData(res.data.data);
        // rooms = res.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // MockData
  let existedRoad = [];
  let limit = 1;

  if (existedRoadData.length != 0) {
    existedRoad = [
      existedRoadData.roads.map((road) => ({
        author: road.author,
        instrument: road.instrument,
        road: road.road,
      })),
    ];
    limit = existedRoadData.limit;
  }

  const roadConfigDefault = [...Array(limit).keys()].map(() => {
    return { color: "white", note: "" };
  });
  roadConfigDefault[0]["color"] = "grey";
  const [roadConfig, setRoadConfig] = useState(roadConfigDefault);
  useEffect(() => {
    setRoadConfig(roadConfigDefault);
  }, [roadConfigDefault.length]);

  return (
    <Road
      roadConfig={roadConfig}
      setRoadConfig={setRoadConfig}
      existedRoad={existedRoad}
    />
  );
}
