import { BlocklyDefinition } from "../code-blockly.service";
declare var Blockly: any;

const type = "onhitwall";

const block = {
  type: type,
  message0: "On hit a wall %1 %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "ONHITWALL_CODE",
    },
  ],
  colour: 65,
  tooltip: "on hitwall",
  helpUrl: "https://www.robolucha.com/play/events/onhitwall",
};

const luaGenerator = function (block) {
  const field = Blockly.Lua.statementToCode(block, "ONHITWALL_CODE");
  return `onHitWall = function()\n${field}end\n`;
};

export class OnHitWallDefinition implements BlocklyDefinition {
  getTypeName() {
    return type;
  }
  getBlockConfig() {
    return block;
  }
  getLuaGenerator() {
    return luaGenerator;
  }
}
