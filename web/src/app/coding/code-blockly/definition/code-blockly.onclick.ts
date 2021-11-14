import { BlocklyDefinition, BlocklyServiceContext } from "../code-blockly.service";
declare var Blockly: any;

const type = "onclick";

const block = {
  type: type,
  message0: "On Click %1 %2",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "ONCLICK_CODE",
    },
  ],
  colour: 65,
  tooltip: "on click",
  helpUrl: "",
};

const codeGenerator = function (block) {
  const field = Blockly.JavaScript.statementToCode(block, "ONCLICK_CODE");
  return `onClick.push(function(){\n${field}\n});\n`;
};

export class OnClickDefinition implements BlocklyDefinition {

  getXML() {
    return `<block type="${type}" />`;
  }
  
  getTypeName() {
    return type;
  }
  getBlockConfig() {
    return block;
  }

  defineBlock() {
    Blockly.defineBlocksWithJsonArray([this.getBlockConfig()]);
  }

  getCodeGenerator() {
    return codeGenerator;
  }
}
