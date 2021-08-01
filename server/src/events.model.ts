export enum Actions {
  // start to share realm state
  Share = "share",

  // connect to an existing realm
  Join = "join",

  // send udpate to a connected realm
  Update = "update",

  // ping
  Ping = "ping",
}

export class ClientMessage {
  action: Actions;
  data: ClientData;
}

export class ClientResponse {
  uuid: string;
  action: Actions;
  data: ClientResponseData;
}

export interface ClientData {}
export interface ClientResponseData {}

export class JoinRequest implements ClientData {
  uuid: string;
}

export class JoinResponse implements ClientResponseData {
  ready: boolean;
  data: StateUpdate;
}

export class Vector3 {
  x: string;
  y: string;
  z: string;
}

export class SceneElement {
  name: string;
  position: Vector3;
  rotation: Vector3;
}

export class StateUpdate implements ClientData, ClientResponseData {
  data: SceneElement[];
}

export class ShareRequest implements ClientData {}

export class ShareResponse implements ClientResponseData {
  uuid: string;
}

export class PingRequest implements ClientData {}

export class PingResponse implements ClientResponseData {
  data: string;
}
