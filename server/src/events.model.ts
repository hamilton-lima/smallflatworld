export enum Actions {
  // start to share realm state
  Share = "share",

  // connect to an existing realm
  Join = "join",

  // send udpate to a connected realm
  Update = "udpate",
}

export class Request {
  action: string;
  data: ShareRequest | JoinRequest | StateUpdate;
}

export class JoinRequest {}
export class JoinResponse {}

// Can use StateUpdate as full state when JoinRequest is received?
// or connect then send a full StateUpdate
export class StateUpdate {}

export class ShareRequest {
  realmState: string;
}

export class ShareResponse {
  uuid: string;
}
