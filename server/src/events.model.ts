export enum Actions {
  // start to share realm state
  Share = "share",

  // connect to an existing realm
  Join = "join",

  // send udpate to a connected realm
  Update = "udpate",

  // ping
  Ping = "ping",
}

export class ClientMessage {
  action: Actions;
  data: ClientData;
}

export interface ClientData {}
export interface ClientResponse {}

export class JoinRequest implements ClientData {}
export class JoinResponse {}

export class Vector3{
  x:string;
  y:string;
  z:string;
}

export class SceneElement {
  name: string;
  position: Vector3;
  rotation: Vector3;
}

export class StateUpdate implements ClientData {
  data: SceneElement[]
}

export class ShareRequest implements ClientData {
}

export class ShareResponse {
  uuid: string;
}

export class PingRequest implements ClientData {}

export class PingResponse {
  data: string;
}
