"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Colyseus + Express
const colyseus_1 = require("colyseus");
const MyRoom_1 = require("./rooms/MyRoom");
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const monitor_1 = require("@colyseus/monitor");
const port = Number(process.env.PORT) || 3000;
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
const server = http_1.default.createServer(app);
const gameServer = new colyseus_1.Server({ server, });
gameServer.define("realm", MyRoom_1.MyRoom);
app.use('/monitor', monitor_1.monitor());
gameServer.listen(port);
console.log('Server listening on port', port);
