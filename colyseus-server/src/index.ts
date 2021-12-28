// Colyseus + Express
import { Server } from "colyseus";
import { MyRoom } from './rooms/MyRoom';

import http from "http";
import express from "express";
import cors from "cors";
import { monitor } from "@colyseus/monitor";

const port = Number(process.env.PORT) || 3000;

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const gameServer = new Server({ server, });
gameServer.define("realm", MyRoom);

app.use('/monitor', monitor() );
gameServer.listen(port);
console.log('Server listening on port', port);