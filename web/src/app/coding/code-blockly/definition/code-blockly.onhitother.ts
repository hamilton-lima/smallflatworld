import { BlocklyDefinition } from "../code-blockly.service";
declare var Blockly: any;

const type = "onhitother";

const block = {
  type: type,
  message0: "On hit other %1 %2 %3",
  args0: [
    {
      type: "field_variable",
      name: "OTHER_ONHIT",
      variable: "other",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "ONHITOTHER_CODE",
    },
  ],
  colour: 65,
  tooltip: "on found",
  helpUrl: "https://www.robolucha.com/play/events/onhitother",
};

const luaGenerator = function (block) {
  const field = Blockly.Lua.statementToCode(block, "ONHITOTHER_CODE");
  return `onHitOther = function(other)\n${field}end\n`;
};

export class OnHitOtherDefinition implements BlocklyDefinition {
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
