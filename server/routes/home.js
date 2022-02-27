const Room = require("../models/Room");

module.exports = function (router) {
  var homeRoute = router.route("/");

  homeRoute.get(async function (req, res) {
    const rooms = await Room.find();
    let roomsBrief = [];
    rooms.map((room) => {
      roomsBrief.push({
        roomId: room._id,
        roomName: room.roomName,
        author: room.author,
        limit: room.limit,
      });
    });
    res.json({ message: "Get all rooms", data: roomsBrief });
  });

  // new room
  homeRoute.post(async (req, res) => {
    const body = req.body;
    const { roomName, BGM, limit, author } = body;
    const newRoom = new Room({
      roomName,
      BGM,
      limit,
      author,
      roads: [],
    });

    const mres = await newRoom.save();
    res.status(201).json({ message: "Room created", data: mres });
  });

  router.get("/:id", async (req, res) => {
    try {
      const targetRoom = await Room.findById(req.params.id);
      if (targetRoom == null) {
        res.status(404).json({ message: "Room not found" });
      } else {
        res.status(200).json({ message: "Found room", data: targetRoom });
      }
    } catch (e) {
      res.status(403).json({ message: "Bad request", data: e });
    }
  });

  // add a road to a room
  router.put("/:id", async (req, res) => {
    try {
      const targetRoom = await Room.findById(req.params.id);
      if (targetRoom == null) {
        res.status(404).json({ message: "Room not found" });
      } else {
        const body = req.body;
        const road = body.road;
        const author = body.author;
        const instrument = body.instrument;
        const newRoad = {
          author,
          instrument,
          road,
        };
        targetRoom.roads.push(newRoad);
        const mres = await targetRoom.save();
        res.status(201).json({ message: "Road added to the room", data: mres });
      }
    } catch (e) {
      res.status(403).json({ message: "Bad request", data: e });
    }
  });

  return router;
};
