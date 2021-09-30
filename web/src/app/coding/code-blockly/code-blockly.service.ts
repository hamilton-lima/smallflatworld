import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { OnFoundDefinition } from "./definition/code-blockly.onfound";
import { OnGotDamageDefinition } from "./definition/code-blockly.ongotdamage";
import { OnHitOtherDefinition } from "./definition/code-blockly.onhitother";
import { OnHitWallDefinition } from "./definition/code-blockly.onhitwall";
import { OnRepeatDefinition } from "./definition/code-blockly.onrepeat";

declare var Blockly: any;

export enum BlocklyConfig {
  Default,
  DefaultWithOther,
  SceneComponent,
  SceneComponentWithOther,
}

export interface BlocklyDefinition {
  getTypeName();
  getBlockConfig();
  getLuaGenerator();
}

@Injectable({ providedIn: "root" })
export class BlocklyService {
  private renderer: Renderer2;

  private configResolution;

  constructor(private factory: RendererFactory2) {
    this.configResolution = new Map([
      [BlocklyConfig.Default, this.getToolboxDefault()],
      [BlocklyConfig.DefaultWithOther, this.getToolboxDefault()],
      [BlocklyConfig.SceneComponent, this.getToolboxSceneComponent()],
    ]);

    // Renderer2 needs to be created manually as there is no provider by default
    this.renderer = factory.createRenderer(null, null);
    this.setup();
    this.forceEmptyInject();
  }

  // force first injection of blockly to prevent issues when loading for the first time
  forceEmptyInject() {
    const cache = this.renderer.createElement("div");
    const id = "blocklycache";
    this.renderer.setProperty(cache, "id", id);
    this.renderer.setStyle(cache, "display", "none");
    this.renderer.appendChild(document.body, cache);
    this.inject(id);
  }

  readonly emptyXML =
    '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';

  inject(
    id: string,
    editorConfig: BlocklyConfig = BlocklyConfig.Default,
    onChange: () => void = null
  ) {
    // call function to build the toolbox based on the config
    const toolbox = this.configResolution.get(editorConfig);

    const blocklyDiv = document.getElementById(id);
    blocklyDiv.innerHTML = "";
    const workspace = Blockly.inject(blocklyDiv, { toolbox: toolbox });

    if (onChange) {
      workspace.addChangeListener(onChange);
    }

    return workspace;
  }

  setXML(xml: string, workspace: any) {
    if (xml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
    } else {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(this.emptyXML),
        workspace
      );
    }
  }

  getXML(workspace) {
    const dom = Blockly.Xml.workspaceToDom(workspace);
    const xml = Blockly.Xml.domToText(dom);
    return xml;
  }

  getCode(workspace) {
    const code = Blockly.Lua.workspaceToCode(workspace);
    return code;
  }

  readonly commands = `
  <category name="Commands" colour="%{BKY_PROCEDURES_HUE}">
      <block type="move" />
      <block type="fire" />
      <block type="turn" />
      <block type="turnGun" />
      <block type="reset" />
      <block type="debug" />
      <block type="math_number" />
      <block type="math_arithmetic" />
  </category>
  `;

  readonly events = `
  <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
    <block type="onfound" />
    <block type="onrepeat" />
    <block type="onhitwall" />
    <block type="ongotdamage" />
    <block type="onhitother" />
  </category>
  `;  
  
  readonly eventsSceneComponent = `
  <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
    <block type="onrepeat" />
    <block type="onhitother" />
  </category>
  `;

  readonly commandsSceneComponent = `
  <category name="Commands" colour="%{BKY_PROCEDURES_HUE}">
      <block type="endGame" />
      <block type="addDamage" />
      <block type="math_number" />
      <block type="math_arithmetic" />
  </category>
  `;

  readonly luchador = `
  <category name="Luchador" colour="260">
    <block type="me_string" />
    <block type="me_number" />
  </category>
  `;

  readonly luchadorWithOther = `
  <category name="Luchador" colour="260">
    <block type="me_string" />
    <block type="me_number" />
    <block type="other_string" />
    <block type="other_number" />
  </category>
  `;

  readonly sceneOther = `
  <category name="Luchador" colour="260">
    <block type="other_string" />
    <block type="other_number" />
  </category>
  `;

  readonly separator = `
  <sep></sep>
  `;

  readonly variables = `
  <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}" />
  `;

  readonly math = `
  <category name="Math" colour="%{BKY_MATH_HUE}">
    <block type="math_number" />
    <block type="math_arithmetic" />
    <block type="math_single" />
    <block type="math_constant" />
    <block type="math_random_int" />
  </category>
  `;

  readonly control = `
  <category name="Control" colour="%{BKY_LOOPS_HUE}" >
    <block type="controls_if" />
    <block type="controls_ifelse"/>
    <block type="controls_whileUntil"/>
    <block type="controls_for"/>
    <block type="controls_forEach"/>
    <block type="controls_flow_statements"/>
  </category>
  `;

  readonly logic = `
  <category name="Logic" colour="%{BKY_LOGIC_HUE}">
    <block type="logic_compare"/>
    <block type="logic_operation"/>
    <block type="logic_boolean"/>
    <block type="logic_negate"/>
  </category>
  `;  
  
  readonly text = `
  <category name="Text" colour="%{BKY_TEXT_HUE}">
    <block type="text"/>
    <block type="text_join"/>
    <block type="text_append"/>
    <block type="text_indexOf"/>
    <block type="text_charAt"/>
    <block type="text_changeCase"/>
  </category>
  `;

  readonly functions = `
  <category name="Functions" colour="#995ba5" custom="PROCEDURE">
  </category>
  `;

  readonly toolboxDefault = [
    this.commands,
    this.events,
    this.luchadorWithOther,
    this.separator,
    this.variables,
    this.math,
    this.text,
    this.control,
    this.logic,
    this.functions,
  ];

  readonly toolboxSceneComponent = [
    this.commandsSceneComponent,
    this.eventsSceneComponent,
    this.sceneOther,
    this.separator,
    this.variables,
    this.math,
    this.text,
    this.control,
    this.logic,
    this.functions,
  ];

  getToolboxXML(data: string[]) {
    const xml = data.join("\n");
    const result = `<xml id="toolbox" style="display: none">${xml}</xml>`;
    return result;
  }

  getToolboxDefault() {
    return this.getToolboxXML(this.toolboxDefault);
  }

  getToolboxSceneComponent() {
    return this.getToolboxXML(this.toolboxSceneComponent);
  }

  readonly definitions: Array<BlocklyDefinition> = [
    new OnFoundDefinition(),
    new OnRepeatDefinition(),
    new OnHitWallDefinition(),
    new OnHitOtherDefinition(),
    new OnGotDamageDefinition(),
  ];

  setup() {
    this.definitions.forEach((definition) => {
      Blockly.defineBlocksWithJsonArray([definition.getBlockConfig()]);
      Blockly.Lua[definition.getTypeName()] = definition.getLuaGenerator();
    });

    // debug	message	string
    Blockly.defineBlocksWithJsonArray([
      {
        // move	distance	number (greater than 0)
        type: "move",
        message0: "move %1",
        args0: [{ type: "input_value", name: "MOVE_VALUE", check: "Number" }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // fire	strength	number (0 to 10)
        type: "fire",
        message0: "fire %1",
        args0: [{ type: "input_value", name: "FIRE_VALUE", check: "Number" }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // turn	degrees	number (-360 to 360)
        type: "turn",
        message0: "turn %1",
        args0: [{ type: "input_value", name: "TURN_VALUE", check: "Number" }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        //turnGun	degrees	number (-360 to 360)
        type: "turnGun",
        message0: "turn gun %1",
        args0: [
          { type: "input_value", name: "TURNGUN_VALUE", check: "Number" },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // reset
        type: "reset",
        message0: "reset",
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // debug	message	string
        type: "debug",
        message0: "debug %1",
        args0: [{ type: "input_value", name: "DEBUG_VALUE" }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        type: "addDamage",
        message0: "add damage %1 %2",
        args0: [
          {
            type: "input_value",
            name: "ADD_DAMAGE_LUCHADOR_VALUE",
            check: "Number",
          },
          {
            type: "input_value",
            name: "ADD_DAMAGE_AMOUNT_VALUE",
            check: "Number",
          },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        type: "endGame",
        message0: "endGame",
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        type: "me_string",
        message0: "me.%1",
        output: "String",
        colour: 290,
        args0: [
          {
            type: "field_dropdown",
            name: "ME_STRING_FIELD",
            options: [
              ["all", ""],
              ["name", ".name"],
            ],
          },
        ],
      },
      {
        type: "me_number",
        message0: "me.%1",
        output: "Number",
        colour: 260,
        args0: [
          {
            type: "field_dropdown",
            name: "ME_NUMBER_FIELD",
            options: [
              ["id", ".id"],
              ["x", ".x"],
              ["y", ".y"],
              ["life", ".life"],
              ["angle", ".angle"],
              ["gunAngle", ".gunAngle"],
              ["fireCooldown", ".fireCooldown"],
              ["fireCooldown", ".fireCooldown"],
              ["kills", ".k"],
              ["deaths", ".d"],
              ["score", ".score"],
            ],
          },
        ],
      },
      {
        type: "other_string",
        message0: "other.%1",
        output: "String",
        colour: 290,
        args0: [
          {
            type: "field_dropdown",
            name: "OTHER_STRING_FIELD",
            options: [
              ["all", ""],
              ["name", ".name"],
            ],
          },
        ],
      },
      {
        type: "other_number",
        message0: "other.%1",
        output: "Number",
        colour: 260,
        args0: [
          {
            type: "field_dropdown",
            name: "OTHER_NUMBER_FIELD",
            options: [
              ["id", ".id"],
              ["x", ".x"],
              ["y", ".y"],
              ["life", ".life"],
              ["angle", ".angle"],
              ["gunAngle", ".gunAngle"],
              ["fireCooldown", ".fireCooldown"],
              ["fireCooldown", ".fireCooldown"],
              ["kills", ".k"],
              ["deaths", ".d"],
              ["score", ".score"],
            ],
          },
        ],
      },
    ]);

    Blockly.Lua["me_string"] = function (block) {
      const field = block.getFieldValue("ME_STRING_FIELD");
      const result = `me${field}`;
      return [result, Blockly.Lua.ORDER_ATOMIC];
    };

    Blockly.Lua["me_number"] = function (block) {
      const field = block.getFieldValue("ME_NUMBER_FIELD");
      const result = `me${field}`;
      return [result, Blockly.Lua.ORDER_ATOMIC];
    };

    Blockly.Lua["other_string"] = function (block) {
      const field = block.getFieldValue("OTHER_STRING_FIELD");
      const result = `other${field}`;
      return [result, Blockly.Lua.ORDER_ATOMIC];
    };

    Blockly.Lua["other_number"] = function (block) {
      const field = block.getFieldValue("OTHER_NUMBER_FIELD");
      const result = `other${field}`;
      return [result, Blockly.Lua.ORDER_ATOMIC];
    };

    Blockly.Lua["move"] = function (block) {
      const value = Blockly.Lua.valueToCode(
        block,
        "MOVE_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );
      return `move(${value})\n`;
    };

    Blockly.Lua["fire"] = function (block) {
      const value = Blockly.Lua.valueToCode(
        block,
        "FIRE_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );
      return `fire(${value})\n`;
    };

    Blockly.Lua["turn"] = function (block) {
      const value = Blockly.Lua.valueToCode(
        block,
        "TURN_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );
      return `turn(${value})\n`;
    };

    Blockly.Lua["turnGun"] = function (block) {
      const value = Blockly.Lua.valueToCode(
        block,
        "TURNGUN_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );
      return `turnGun(${value})\n`;
    };

    Blockly.Lua["reset"] = function (block) {
      return `reset()\n`;
    };

    Blockly.Lua["debug"] = function (block) {
      const value = Blockly.Lua.valueToCode(
        block,
        "DEBUG_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );
      return `debug(${value})\n`;
    };

    Blockly.Lua["addDamage"] = function (block) {
      const luchadorID = Blockly.Lua.valueToCode(
        block,
        "ADD_DAMAGE_LUCHADOR_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );
      const amount = Blockly.Lua.valueToCode(
        block,
        "ADD_DAMAGE_AMOUNT_VALUE",
        Blockly.Lua.ORDER_ATOMIC
      );

      return `addDamage(${luchadorID}, ${amount})\n`;
    };

    Blockly.Lua["endGame"] = function (block) {
      return `endGame()\n`;
    };
  }
}
