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

// Can use StateUpdate as full state when JoinRequest is received?
// or connect then send a full StateUpdate
export class StateUpdate implements ClientData {}

export class ShareRequest implements ClientData {
}

export class ShareResponse {
  uuid: string;
}

export class PingRequest implements ClientData {}

export class PingResponse {
  data: string;
}
