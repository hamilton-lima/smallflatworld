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

// Abstract response from all types of requests
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

export class Vector3Memento {
  x: number;
  y: number;
  z: number;
}

export class SceneElementMemento {
  name: string;
  position: Vector3Memento;
  rotation: Vector3Memento;
}

export class StateUpdate implements ClientData, ClientResponseData {
  data: SceneElementMemento[];
}

export class ShareRequest implements ClientData {}

export class ShareResponse implements ClientResponseData {
  uuid: string;
}

export class PingRequest implements ClientData {}

export class PingResponse implements ClientResponseData {
  data: string;
}
