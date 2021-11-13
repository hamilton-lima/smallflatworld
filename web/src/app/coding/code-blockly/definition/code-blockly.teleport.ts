import { BlocklyDefinition } from '../code-blockly.service';
declare var Blockly: any;

const type = 'teleport';

const block = {
  type: type,
  message0: 'teleport %1',
  args0: [
    {
      type: 'input_value',
      name: 'TELEPORT_POSITION',
      check: 'Position',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  inputsInline: true,
  colour: 355,
  tooltip: 'teleport',
  helpUrl: '',
};

const codeGenerator = function (block) {
  const position = Blockly.JavaScript.valueToCode(
    block,
    'TELEPORT_POSITION',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return `teleport(${position});\n`;
};

export class TeleportDefinition implements BlocklyDefinition {
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
