import { Injectable } from '@angular/core';
import { CreateDefinition } from './definition/code-blockly.create';
import { OnClickDefinition } from './definition/code-blockly.onclick';
import { OnRepeatDefinition } from './definition/code-blockly.onrepeat';
import { PositionDefinition } from './definition/code-blockly.position';
import { TeleportDefinition } from './definition/code-blockly.teleport';

@Injectable({
  providedIn: 'root',
})
export class BlocklyDefaultToolboxService {
  constructor() {}

  getToolbox(): string[] {
    const onclick = OnClickDefinition.getXML();
    const onrepeat = OnRepeatDefinition.getXML();

    const create = CreateDefinition.getXML();
    const teleport = TeleportDefinition.getXML();
    const position = PositionDefinition.getXML();

    const commands = `
    <category name="Commands" colour="%{BKY_PROCEDURES_HUE}">
      <block type="message" />
      <block type="bottom_message" />
      <block type="playSound" />

      ${create}
      ${teleport}
      ${position}
  
      <block type="turn" />
      <block type="math_number" />
      <block type="math_arithmetic" />
    </category>
    `;

    const events = `
    <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
      ${onclick}
    </category>
    `;

    const luchador = `
    <category name="Luchador" colour="260">
      <block type="me_string" />
      <block type="me_number" />
    </category>
    `;

    const separator = `
    <sep></sep>
    `;

    const variables = `
    <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}" />
    `;

    const math = `
    <category name="Math" colour="%{BKY_MATH_HUE}">
      <block type="math_number" />
      <block type="math_arithmetic" />
      <block type="math_single" />
      <block type="math_constant" />
      <block type="math_random_int" />
    </category>
    `;

    const control = `
    <category name="Control" colour="%{BKY_LOOPS_HUE}" >
      <block type="controls_if" />
      <block type="controls_ifelse"/>
      <block type="controls_whileUntil"/>
      <block type="controls_for"/>
      <block type="controls_forEach"/>
      <block type="controls_flow_statements"/>
    </category>
    `;

    const logic = `
    <category name="Logic" colour="%{BKY_LOGIC_HUE}">
      <block type="logic_compare"/>
      <block type="logic_operation"/>
      <block type="logic_boolean"/>
      <block type="logic_negate"/>
    </category>
    `;

    const text = `
    <category name="Text" colour="%{BKY_TEXTS_HUE}">
      <block type="text"/>
      <block type="text_join"/>
      <block type="text_append"/>
      <block type="text_indexOf"/>
      <block type="text_charAt"/>
      <block type="text_changeCase"/>
    </category>
    `;

    const functions = `
    <category name="Functions" colour="#995ba5" custom="PROCEDURE">
    </category>
    `;

    const toolboxDefault = [
      commands,
      events,
      separator,
      variables,
      math,
      text,
      control,
      logic,
      functions,
    ];

    return toolboxDefault;
  }
}
