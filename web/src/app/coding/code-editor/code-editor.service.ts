import { Injectable } from "@angular/core";
import { ModelCode } from "src/app/sdk";

export const ALL = "all";

@Injectable({
  providedIn: "root",
})
export class CodeEditorService {
  constructor() {}

  getCode(codes: ModelCode[], gameDefinitionID = 0): ModelCode {
    if (codes && codes.length > 0) {
      const code = codes.filter((code) => code.event == ALL);
      if (code && code.length > 0) {
        return code[0];
      }
    }

    return this.emptyCode(gameDefinitionID);
  }

  emptyCode(gameDefinitionID): ModelCode {
    return <ModelCode>{
      event: ALL,
      gameDefinition: gameDefinitionID
    };
  }
}
