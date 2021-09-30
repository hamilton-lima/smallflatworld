import { BlocklyDefinition } from "../code-blockly.service";
declare var Blockly: any;

const type = "ongotdamage";

const block = {
  type: type,
  message0: "On got damage %1 %2 %3 %4",
  args0: [
    {
      type: "field_variable",
      name: "OTHER_ONGOTDAMAGE",
      variable: "other",
    },
    {
      type: "field_variable",
      name: "AMOUNT_ONGOTDAMAGE",
      variable: "amount",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "ONGOTDAMAGE_CODE",
    },
  ],
  colour: 65,
  tooltip: "on found",
  helpUrl: "https://www.robolucha.com/play/events/ongotdamage",
};

const luaGenerator = function (block) {
  const field = Blockly.Lua.statementToCode(block, "ONGOTDAMAGE_CODE");
  return `onGotDamage = function(other,amount)\n${field}end\n`;
};

export class OnGotDamageDefinition implements BlocklyDefinition {
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
