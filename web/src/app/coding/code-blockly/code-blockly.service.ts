import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { OnRepeatDefinition } from './definition/code-blockly.onrepeat';
import { OnClickDefinition } from './definition/code-blockly.onclick';
import { PositionDefinition } from './definition/code-blockly.position';
import { AudioService } from 'src/app/library/audio.service';
import { EditorLibraryService } from 'src/app/editor/editor-library.service';
import { INTERNAL_BASIC_LIBRARY } from 'src/app/editor/basic-shapes.library';
import { ImagesService } from 'src/app/library/images.service';

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
  getCodeGenerator();
}

@Injectable({ providedIn: 'root' })
export class BlocklyService {
  private renderer: Renderer2;

  private configResolution;

  constructor(
    private factory: RendererFactory2,
    private audio: AudioService,
    private editorLibrary: EditorLibraryService,
    private images: ImagesService
  ) {
    this.configResolution = new Map([
      [BlocklyConfig.Default, this.getToolboxDefault()],
      [BlocklyConfig.DefaultWithOther, this.getToolboxDefault()],
    ]);

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

  readonly commands = `
  <category name="Commands" colour="%{BKY_PROCEDURES_HUE}">
    <block type="message" />
    <block type="bottom_message" />
    <block type="playSound" />
    <block type="create" />
    <block type="position" />
    <block type="turn" />
    <block type="math_number" />
    <block type="math_arithmetic" />
  </category>
  `;

  readonly events = `
  <category name="Events" colour="%{BKY_PROCEDURES_HUE}">
    <block type="onclick" />
    <block type="onrepeat" />
  </category>
  `;

  readonly luchador = `
  <category name="Luchador" colour="260">
    <block type="me_string" />
    <block type="me_number" />
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
  <category name="Text" colour="%{BKY_TEXTS_HUE}">
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
    this.separator,
    this.variables,
    this.math,
    this.text,
    this.control,
    this.logic,
    this.functions,
  ];

  getToolboxXML(data: string[]) {
    const xml = data.join('\n');
    const result = `<xml id="toolbox" style="display: none">${xml}</xml>`;
    return result;
  }

  getToolboxDefault() {
    return this.getToolboxXML(this.toolboxDefault);
  }

  readonly definitions: Array<BlocklyDefinition> = [
    new OnClickDefinition(),
    new OnRepeatDefinition(),
    new PositionDefinition(),
  ];

  // Return list of component based on library name
  // @see https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown
  //
  getListOfComponents(currentLibrary: string) {
    console.log('current library', currentLibrary);
    let options = [['Please choose a library', 'N/A']];

    if (currentLibrary) {
      const libraries = this.editorLibrary.getLibraries();
      const library = libraries.find(
        (library) => library.name == currentLibrary
      );

      console.log('current library (2)', library);

      if (library) {
        const components = library.components.map((component) => {
          const image = {
            src: component.icon,
            width: 70,
            height: 70,
            alt: component.name,
          };
          return [image, component.name];
        });

        console.log('components', components);

        if (components.length > 0) {
          return components;
        }
      }
    }
    return options;
  }

  getListOfImages() {
    let options = [['Please choose a library', 'N/A']];

    const components = this.images.onUpdate.value.map((sceneImage) => {
      const image = {
        src: sceneImage.base64,
        width: 70,
        height: 70,
        alt: sceneImage.name,
      };
      return [image, sceneImage.name];
    });

    console.log('images', components);

    if (components.length > 0) {
      return components;
    }

    return options;
  }

  setup() {
    this.definitions.forEach((definition) => {
      Blockly.defineBlocksWithJsonArray([definition.getBlockConfig()]);
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

    Blockly.Extensions.register('list_editor_library_extension', function () {
      this.getInput('INPUT_LIBRARY').appendField(
        new Blockly.FieldDropdown(function () {
          const libraries = self.editorLibrary.getLibraries();

          var options = libraries.map((library) => [
            library.name,
            library.name,
          ]);
          if (options.length == 0) {
            options = [['No libraries available', 'N/A']];
          }
          return options;
        }),
        'CREATE_LIBRARY_VALUE'
      );
    });

    Blockly.Extensions.register(
      'list_components_from_library_extension',
      function () {
        const currentLibrary = this.getFieldValue('CREATE_LIBRARY_VALUE');

        this.getInput('INPUT_NAME').appendField(
          new Blockly.FieldDropdown(function () {
            return self.getListOfComponents(currentLibrary);
          }),
          'CREATE_LIBRARY_NAME_VALUE'
        );
      }
    );

    Blockly.Extensions.register(
      'list_images_for_internal_basic_extension',
      function () {
        const currentLibrary = this.getFieldValue('CREATE_LIBRARY_VALUE');
        if (currentLibrary == INTERNAL_BASIC_LIBRARY) {
          this.getInput('INPUT_IMAGE').appendField(
            new Blockly.FieldDropdown(function () {
              return self.getListOfImages();
            }),
            'CREATE_LIBRARY_IMAGE_VALUE'
          );
        }
      }
    );

    Blockly.Blocks['create'] = {
      init: function () {
        this.jsonInit({
          // create scene element
          type: 'create',
          message0: 'create %1 %2 %3 %4',
          args0: [
            {
              type: 'input_value',
              name: 'INPUT_POSITION',
              check: 'Position',
            },
            { type: 'input_dummy', name: 'INPUT_LIBRARY' },
            { type: 'input_dummy', name: 'INPUT_IMAGE' },
            { type: 'input_dummy', name: 'INPUT_NAME' },
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 355,
          extensions: [
            'list_editor_library_extension',
            'list_images_for_internal_basic_extension',
            'list_components_from_library_extension',
          ],
        });
      },
      onchange: function (event) {
        // @see https://stackoverflow.com/questions/67206414/blockly-update-other-inputdummy-dropdown-fields-based-on-selection-of-a-inputdu
        if (event.name == 'CREATE_LIBRARY_VALUE') {
          // remove existing dropdown list
          this.getInput('INPUT_NAME').removeField('CREATE_LIBRARY_NAME_VALUE');

          // add new list
          const currentLibrary = this.getFieldValue('CREATE_LIBRARY_VALUE');

          this.getInput('INPUT_NAME').appendField(
            new Blockly.FieldDropdown(function () {
              return self.getListOfComponents(currentLibrary);
            }),
            'CREATE_LIBRARY_NAME_VALUE'
          );

          // change to internal add list of images to select
          if (currentLibrary == INTERNAL_BASIC_LIBRARY) {
            this.getInput('INPUT_IMAGE').appendField(
              new Blockly.FieldDropdown(function () {
                return self.getListOfImages();
              }),
              'CREATE_LIBRARY_IMAGE_VALUE'
            );
          } else {
            // remove the image selection
            this.getInput('INPUT_IMAGE').removeField(
              'CREATE_LIBRARY_IMAGE_VALUE'
            );
          }
        }
      },
    };

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

    Blockly.JavaScript['create'] = function (block) {
      const library = block.getFieldValue('CREATE_LIBRARY_VALUE');
      const name = block.getFieldValue('CREATE_LIBRARY_NAME_VALUE');
      console.log('building create command', library, name);
      return `create('${library}','${name}');\n`;
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
