import React from "react";
import Road from "../components/Road";
import { useState } from "react";
export default function MusicPage() {
  // MockData
  const existedRoad = [
    {
      author: "Mike",
      road: [
        { color: "white", note: "" },
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
        { color: "white", note: "" },
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
