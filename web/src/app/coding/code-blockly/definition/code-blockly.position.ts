import { BlocklyDefinition } from '../code-blockly.service';
declare var Blockly: any;

const type = 'position';

const block = {
  type: type,
  message0: 'Left %1 Far %2 Up %3',
  args0: [
    {
      type: 'input_value',
      name: 'LEFT_VALUE',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'FAR_VALUE',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'UP_VALUE',
      check: 'Number',
    },
  ],
  output: 'Position',
  colour: 230,
  tooltip: '',
  helpUrl: '',
};

const codeGenerator = function (block) {
  const left = Blockly.JavaScript.valueToCode(
    block,
    'LEFT_VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const far = Blockly.JavaScript.valueToCode(
    block,
    'FAR_VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const up = Blockly.JavaScript.valueToCode(
    block,
    'UP_VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );

  const result = `new Position(${left},${far},${up})`;
  return [result, Blockly.JavaScript.ORDER_ATOMIC];
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