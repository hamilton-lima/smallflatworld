import { BlocklyDefinition } from "../code-blockly.service";
declare var Blockly: any;

const type = "onfound";

const block = {
  type: type,
  message0: "On found other %1 %2 %3 %4",
  args0: [
    {
      type: "field_variable",
      name: "OTHER_FOUND",
      variable: "other",
    },
    {
      type: "field_variable",
      name: "CHANCE_FOUND",
      variable: "chance",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "ONFOUND_CODE",
    },
  ],
  colour: 65,
  tooltip: "on found",
  helpUrl: "",
};

const codeGenerator = function (block) {
  const field = Blockly.JavaScript.statementToCode(block, "ONFOUND_CODE");
  return `onFound = function(other,chance)\n${field}end\n`;
};

export class OnFoundDefinition implements BlocklyDefinition {
  getTypeName() {
    return type;
  }
  getBlockConfig() {
    return block;
  }
  getCodeGenerator() {
    return codeGenerator;
  }
}
