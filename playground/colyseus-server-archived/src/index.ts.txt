// Colyseus + Express
import { Server } from "colyseus";
import { MyRoom } from "./room";

import http from "http";
import express from "express";
import cors from "cors";
import { monitor } from "@colyseus/monitor";
import { WebSocketTransport } from "@colyseus/ws-transport";

const port = Number(process.env.PORT) || 3000;

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const serverOptions = {
  transport: new WebSocketTransport({
    server: httpServer,
  }),
};

const gameServer = new Server(serverOptions);
gameServer.define("realm", MyRoom);

app.use("/monitor", monitor());
gameServer.listen(port);
console.log("Server listening on port", port);
