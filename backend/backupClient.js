
import zmq from 'zeromq';

// import json from 'json';
import express from "express";
const client = express()
client.use(express.json())

// const zmq = require("zeromq");
// const json = require("json");

export async function copyData(dataDict) {
  const socket = new zmq.Request();

  await socket.connect("tcp://localhost:5555");

  const json_data = JSON.stringify(dataDict);
  socket.send(json_data);


  const [response] = await socket.receive();
  console.log("Received:", response.toString());

  await socket.close();

  return response.toString();
}

// const data = {
//   readyForCopying: true,
//   json_data: {
//     name: "pizza",
//     description: "delicious",
//     category: "food",
//     price: "20",
//   },
// };

// copyData(data)
