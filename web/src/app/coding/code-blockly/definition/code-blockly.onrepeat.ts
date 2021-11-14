import { BlocklyDefinition } from '../code-blockly.service';
declare var Blockly: any;

const type = 'onrepeat';

const block = {
  type: type,
  message0: 'Repeat %1 %2',
  args0: [
    {
      type: 'input_dummy',
    },
    {
      type: 'input_statement',
      name: 'ONREPEAT_CODE',
    },
  ],
  colour: 65,
  tooltip: 'on repeat',
  helpUrl: '',
};

const codeGenerator = function (block) {
  const field = Blockly.JavaScript.statementToCode(block, 'ONREPEAT_CODE');
  return `onRepeat.push(\nfunction(){\n${field}\n};\n);\n`;
};

export class OnRepeatDefinition implements BlocklyDefinition {
  static getXML() {
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
