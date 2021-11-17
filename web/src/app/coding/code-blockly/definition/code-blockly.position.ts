import { BlocklyDefinition } from '../code-blockly.service';
declare var Blockly: any;

const type = 'position';

const block = {
  type: type,
  message0: 'North %2 West %1 Altitude %3',
  args0: [
    {
      type: 'input_value',
      name: 'NORTH_VALUE',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'WEST_VALUE',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'ALTITUDE_VALUE',
      check: 'Number',
    },
  ],
  output: 'Position',
  colour: 230,
  tooltip: '',
  helpUrl: '',
};

const codeGenerator = function (block) {
  const north = Blockly.JavaScript.valueToCode(
    block,
    'NORTH_VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const west = Blockly.JavaScript.valueToCode(
    block,
    'WEST_VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  const altitude = Blockly.JavaScript.valueToCode(
    block,
    'ALTITUDE_VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );

  const result = `new Position(${north},${west},${altitude})`;
  return [result, Blockly.JavaScript.ORDER_ATOMIC];
};

export class PositionDefinition implements BlocklyDefinition {
  static getXML() {
    return `
      <block type="${type}" >
      <value name="NORTH_VALUE">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="WEST_VALUE">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
      <value name="ALTITUDE_VALUE">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
      </value>
    </block> 
    `;
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
