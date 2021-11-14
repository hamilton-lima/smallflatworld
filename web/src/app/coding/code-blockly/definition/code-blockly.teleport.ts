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
  getXML() {
    const xml = `
      <block type="${type}">
      <value name="TELEPORT_POSITION">
        <block type="position" >
          <value name="LEFT_VALUE">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="FAR_VALUE">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
          <value name="UP_VALUE">
            <block type="math_number">
              <field name="NUM">0</field>
            </block>
          </value>
        </block>  
      </value>
    </block>
    `;
    return xml;
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
