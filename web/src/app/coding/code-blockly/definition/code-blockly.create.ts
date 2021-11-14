import {
  BlocklyDefinition,
  BlocklyServiceContext,
} from '../code-blockly.service';
import { INTERNAL_BASIC_LIBRARY } from 'src/app/editor/basic-shapes.library';
import { PositionDefinition } from './code-blockly.position';
declare var Blockly: any;

// Return list of component based on library name
// @see https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown
//
function getListOfComponents(
  context: BlocklyServiceContext,
  currentLibrary: string
) {
  console.log('current library', currentLibrary);
  let options = [['Please choose a library', 'N/A']];

  if (currentLibrary) {
    const libraries = context.editorLibrary.getLibraries();
    const library = libraries.find((library) => library.name == currentLibrary);

    console.log('current library object', library);

    if (library) {
      const components = library.components.map((component) => {
        const image = {
          src: component.icon,
          width: 70,
          height: 70,
          alt: component.name,
        };
        return [image, component.id];
      });

      console.log('components', components);

      if (components.length > 0) {
        return components;
      }
    }
  }
  return options;
}

function getListOfImages(context: BlocklyServiceContext) {
  let options = [['No images available', 'N/A']];

  const components = context.images.onUpdate.value.map((sceneImage) => {
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

const type = 'create';

const codeGenerator = function (block) {
  const library = block.getFieldValue('CREATE_LIBRARY_VALUE');
  const name = block.getFieldValue('CREATE_LIBRARY_NAME_VALUE');
  const image = block.getFieldValue('CREATE_LIBRARY_IMAGE_VALUE');

  const position = Blockly.JavaScript.valueToCode(
    block,
    'INPUT_POSITION',
    Blockly.JavaScript.ORDER_ATOMIC
  );

  const generatedCode = `create('${library}','${name}', '${image}', ${position});\n`;
  return generatedCode;
};

export class CreateDefinition implements BlocklyDefinition {
  context: BlocklyServiceContext;

  constructor(context: BlocklyServiceContext) {
    this.context = context;

    Blockly.Extensions.register('list_editor_library_extension', function () {
      this.getInput('INPUT_LIBRARY').appendField(
        new Blockly.FieldDropdown(function () {
          const libraries = context.editorLibrary.getLibraries();

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
        console.log('who is this?', this);
        const currentLibrary = this.getFieldValue('CREATE_LIBRARY_VALUE');
        console.log('getListOfComponents extension', currentLibrary);

        this.getInput('INPUT_NAME').appendField(
          new Blockly.FieldDropdown(function () {
            return getListOfComponents(context, currentLibrary);
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
              return getListOfImages(context);
            }),
            'CREATE_LIBRARY_IMAGE_VALUE'
          );
        }
      }
    );

    Blockly.Extensions.registerMutator('create_mutator', {
      mutationToDom: function () {
        const container = Blockly.utils.xml.createElement('mutation');
        const library = this.getFieldValue('CREATE_LIBRARY_VALUE');
        const name = this.getFieldValue('CREATE_LIBRARY_NAME_VALUE');
        const image = this.getFieldValue('CREATE_LIBRARY_IMAGE_VALUE');

        container.setAttribute('library', library);
        container.setAttribute('name', name);
        container.setAttribute('image', image);
        console.log('mutation to dom', container);
        return container;
      },

      domToMutation: function (containerElement) {
        const library = containerElement.getAttribute('library');
        const name = containerElement.getAttribute('name');
        const image = containerElement.getAttribute('image');

        // set name based on the value saved on mutation
        this.getInput('INPUT_NAME').removeField('CREATE_LIBRARY_NAME_VALUE');
        this.getInput('INPUT_NAME').appendField(
          new Blockly.FieldDropdown(function () {
            return getListOfComponents(context, library);
          }),
          'CREATE_LIBRARY_NAME_VALUE'
        );
        this.getField('CREATE_LIBRARY_NAME_VALUE').setValue(name);

        // set image based on the value saved on mutation
        this.getInput('INPUT_IMAGE').removeField('CREATE_LIBRARY_IMAGE_VALUE');

        if (library == INTERNAL_BASIC_LIBRARY) {
          this.getInput('INPUT_IMAGE').appendField(
            new Blockly.FieldDropdown(function () {
              return getListOfImages(context);
            }),
            'CREATE_LIBRARY_IMAGE_VALUE'
          );
          this.getField('CREATE_LIBRARY_IMAGE_VALUE').setValue(image);
        }

        console.log('dom 2 mutation', name, image, library);
      },
    });
  }

  static getXML() {
    const position = PositionDefinition.getXML();

    const xml = `
      <block type="${type}" />
      <block type="${type}">
        <value name="INPUT_POSITION">
          ${position}
        </value>
      </block>
    `;
    return xml;
  }

  getTypeName() {
    return type;
  }

  getBlockConfig() {
    const self = this;

    const block = {
      init: function () {
        this.jsonInit({
          // create scene element
          type: 'create',
          message0: 'create %1 %2 %3 %4',
          args0: [
            { type: 'input_dummy', name: 'INPUT_LIBRARY' },
            { type: 'input_dummy', name: 'INPUT_IMAGE' },
            { type: 'input_dummy', name: 'INPUT_NAME' },
            {
              type: 'input_value',
              name: 'INPUT_POSITION',
              check: 'Position',
            },
          ],
          previousStatement: null,
          nextStatement: null,
          inputsInline: true,
          colour: 355,
          extensions: [
            'list_editor_library_extension',
            'list_images_for_internal_basic_extension',
            'list_components_from_library_extension',
          ],
          mutator: 'create_mutator',
        });
      },
      onchange: function (event) {
        console.log('changed', event);
        // @see https://stackoverflow.com/questions/67206414/blockly-update-other-inputdummy-dropdown-fields-based-on-selection-of-a-inputdu
        if (event.name == 'CREATE_LIBRARY_VALUE') {
          // remove existing dropdown list
          this.getInput('INPUT_NAME').removeField('CREATE_LIBRARY_NAME_VALUE');
    
          // add new list
          const currentLibrary = this.getFieldValue('CREATE_LIBRARY_VALUE');
    
          console.log('getListOfComponents onchange', currentLibrary);
          this.getInput('INPUT_NAME').appendField(
            new Blockly.FieldDropdown(function () {
              return getListOfComponents(self.context,currentLibrary);
            }),
            'CREATE_LIBRARY_NAME_VALUE'
          );
    
          // change to internal add list of images to select
          if (currentLibrary == INTERNAL_BASIC_LIBRARY) {
            this.getInput('INPUT_IMAGE').appendField(
              new Blockly.FieldDropdown(function () {
                return getListOfImages(self.context);
              }),
              'CREATE_LIBRARY_IMAGE_VALUE'
            );
          } else {
            // remove the image selection
            this.getInput('INPUT_IMAGE').removeField('CREATE_LIBRARY_IMAGE_VALUE');
          }
        }
      },
    };
    
    return block;
  }

  defineBlock() {
    Blockly.Blocks[type] = this.getBlockConfig();
  }

  getCodeGenerator() {
    return codeGenerator;
  }
}
