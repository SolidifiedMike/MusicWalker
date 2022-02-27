import React from "react";
import Road from "../components/Road";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import apiHeader from "../config";
export default function MusicPage() {
  const { id } = useParams();
  useEffect(() => {
    Axios({
      method: "GET",
      url: `${apiHeader + "/" + id}`,
    })
      .then((res) => {
        console.log(res.data.data);
        // rooms = res.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // MockData
  const existedRoad = [
    {
      author: "Mike",
      road: [
        { color: "grey", note: "" },
        { color: "#adff2f", note: "B4" },
        { color: "#78acff", note: "F4" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "#adff2f", note: "B4" },
        { color: "#adff2f", note: "B4" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "#78acff", note: "F4" },
        { color: "#adff2f", note: "B4" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
      ],
    },
    {
      author: "Ray",
      road: [
        { color: "grey", note: "" },
        { color: "#adff2f", note: "B4" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "#adff2f", note: "B4" },
        { color: "#78acff", note: "F4" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "#adff2f", note: "B4" },
        { color: "#78acff", note: "F4" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
        { color: "white", note: "" },
      ],
    },
  ];

  const roadConfigDefault = [
    { color: "grey", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
    { color: "white", note: "" },
  ];
  const [roadConfig, setRoadConfig] = useState(roadConfigDefault);
  return (
    <Road
      roadConfig={roadConfig}
      setRoadConfig={setRoadConfig}
      existedRoad={existedRoad}
    />
  );
}
