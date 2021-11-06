import { BlocklyDefinition } from '../code-blockly.service';
declare var Blockly: any;

const type = 'position';

const block = {
  type: type,
  message0: 'Left %1 Far %2 Up %3',
  args0: [
    {
      type: 'input_value',
      name: 'LEFT',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'FAR',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'UP',
      check: 'Number',
    },
  ],
  output: 'Position',
  colour: 230,
  tooltip: '',
  helpUrl: '',
};

const codeGenerator = function (block) {
  const left = Blockly.JavaScript.statementToCode(block, 'LEFT');
  const far = Blockly.JavaScript.statementToCode(block, 'FAR');
  const up = Blockly.JavaScript.statementToCode(block, 'UP');
  return `new Position(${left},${far},${up})`;
};

export class PositionDefinition implements BlocklyDefinition {
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
