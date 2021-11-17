import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { OnRepeatDefinition } from './definition/code-blockly.onrepeat';
import { OnClickDefinition } from './definition/code-blockly.onclick';
import { CreateDefinition } from './definition/code-blockly.create';
import { TeleportDefinition } from './definition/code-blockly.teleport';
import { PositionDefinition } from './definition/code-blockly.position';
import { AudioService } from 'src/app/library/audio.service';
import { EditorLibraryService } from 'src/app/editor/editor-library.service';
import { ImagesService } from 'src/app/library/images.service';
import { BlocklyDefaultToolboxService } from './blockly-default-toolbox.service';

declare var Blockly: any;

export enum BlocklyConfig {
  Default,
  DefaultWithOther,
  SceneComponent,
  SceneComponentWithOther,
}

export interface BlocklyDefinition {
  getTypeName();
  defineBlock();
  getCodeGenerator();
}

export class BlocklyServiceContext {
  audio: AudioService;
  editorLibrary: EditorLibraryService;
  images: ImagesService;
}

@Injectable({ providedIn: 'root' })
export class BlocklyService {
  private renderer: Renderer2;
  private context: BlocklyServiceContext;
  private configResolution;

  constructor(
    private factory: RendererFactory2,
    private audio: AudioService,
    private editorLibrary: EditorLibraryService,
    private images: ImagesService,
    private toolboxDefault: BlocklyDefaultToolboxService
  ) {
    this.configResolution = new Map([
      [BlocklyConfig.Default, this.getToolboxDefault()],
      [BlocklyConfig.DefaultWithOther, this.getToolboxDefault()],
    ]);

    this.context = <BlocklyServiceContext>{
      audio: this.audio,
      editorLibrary: this.editorLibrary,
      images: this.images,
    };

    // Renderer2 needs to be created manually as there is no provider by default
    this.renderer = factory.createRenderer(null, null);
    this.setup();
    this.forceEmptyInject();
  }

  // force first injection of blockly to prevent issues when loading for the first time
  forceEmptyInject() {
    const cache = this.renderer.createElement('div');
    const id = 'blocklycache';
    this.renderer.setProperty(cache, 'id', id);
    this.renderer.setStyle(cache, 'display', 'none');
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
    blocklyDiv.innerHTML = '';
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
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    return code;
  }

  getToolboxXML(data: string[]) {
    const xml = data.join('\n');
    const result = `<xml id="toolbox" style="display: none">${xml}</xml>`;
    return result;
  }

  getToolboxDefault() {
    return this.getToolboxXML(this.toolboxDefault.getToolbox());
  }

  setup() {
    const definitions: Array<BlocklyDefinition> = [
      new OnClickDefinition(),
      new OnRepeatDefinition(),
      new PositionDefinition(),
      new TeleportDefinition(),
      new CreateDefinition(this.context),
    ];

    definitions.forEach((definition) => {
      definition.defineBlock();
      Blockly.JavaScript[definition.getTypeName()] =
        definition.getCodeGenerator();
    });

    const self = this;
    Blockly.Extensions.register('list_sound_menu_extension', function () {
      this.getInput('INPUT').appendField(
        new Blockly.FieldDropdown(function () {
          var options = self.audio.onUpdate.value.map((audio) => [
            audio.name,
            audio.name,
          ]);
          if (options.length == 0) {
            options = [['No sound available', 'N/A']];
          }
          return options;
        }),
        'PLAY_SOUND_VALUE'
      );
    });

    // debug	message	string
    Blockly.defineBlocksWithJsonArray([
      {
        // show message
        type: 'message',
        message0: 'message %1',
        args0: [
          { type: 'input_value', name: 'MESSAGE_VALUE', check: 'String' },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // show bottom message
        type: 'bottom_message',
        message0: 'bottom message %1',
        args0: [
          {
            type: 'input_value',
            name: 'BOTTOM_MESSAGE_VALUE',
            check: 'String',
          },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // play sound file
        type: 'playSound',
        message0: 'play sound %1',
        args0: [{ type: 'input_dummy', name: 'INPUT' }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
        extensions: ['list_sound_menu_extension'],
      },
      {
        // turn	degrees	number (-360 to 360)
        type: 'turn',
        message0: 'turn %1',
        args0: [{ type: 'input_value', name: 'TURN_VALUE', check: 'Number' }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        // debug	message	string
        type: 'debug',
        message0: 'debug %1',
        args0: [{ type: 'input_value', name: 'DEBUG_VALUE' }],
        previousStatement: null,
        nextStatement: null,
        colour: 355,
      },
      {
        type: 'me_string',
        message0: 'me.%1',
        output: 'String',
        colour: 290,
        args0: [
          {
            type: 'field_dropdown',
            name: 'ME_STRING_FIELD',
            options: [
              ['all', ''],
              ['name', '.name'],
            ],
          },
        ],
      },
      {
        type: 'me_number',
        message0: 'me.%1',
        output: 'Number',
        colour: 260,
        args0: [
          {
            type: 'field_dropdown',
            name: 'ME_NUMBER_FIELD',
            options: [
              ['id', '.id'],
              ['x', '.x'],
              ['y', '.y'],
              ['z', '.z'],
              ['life', '.life'],
              ['angle', '.angle'],
            ],
          },
        ],
      },
    ]);

    Blockly.JavaScript['me_string'] = function (block) {
      const field = block.getFieldValue('ME_STRING_FIELD');
      const result = `me${field}`;
      return [result, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript['me_number'] = function (block) {
      const field = block.getFieldValue('ME_NUMBER_FIELD');
      const result = `me${field}`;
      return [result, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript['playSound'] = function (block) {
      const value = block.getFieldValue('PLAY_SOUND_VALUE');
      console.log('building play sound', value);
      return `playSound('${value}');\n`;
    };

    Blockly.JavaScript['message'] = function (block) {
      const value = Blockly.JavaScript.valueToCode(
        block,
        'MESSAGE_VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      return `message(${value});\n`;
    };

    Blockly.JavaScript['bottom_message'] = function (block) {
      const value = Blockly.JavaScript.valueToCode(
        block,
        'BOTTOM_MESSAGE_VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      return `bottomMessage(${value});\n`;
    };

    Blockly.JavaScript['turn'] = function (block) {
      const value = Blockly.JavaScript.valueToCode(
        block,
        'TURN_VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      return `turn(${value});\n`;
    };

    Blockly.JavaScript['debug'] = function (block) {
      const value = Blockly.JavaScript.valueToCode(
        block,
        'DEBUG_VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      return `debug(${value});\n`;
    };
  }
}
