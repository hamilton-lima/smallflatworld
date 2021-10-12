const iconFolder = "/Isometric/";
const modelFolder = "/Models/GLTF format/";
const testFolder = '../web/src/assets/library/kenney/';
const modelExtension = ".glb";
const iconExtension = "_E.png";
const iconExtension2 = "_NE.png";
const fs = require('fs');
const libraryNamePreffix = "kenney/";

modelPath = "library/kenney/";
iconPath = "assets/library/kenney/";

resultLibraries = [];
result = "import { Library } from './editor-library.model'; \n\n";

const libraries = fs.readdirSync(testFolder);
const getVarName = function (input) {
  let result = input;
  while (result.indexOf("-") > 0) {
    result = result.replace("-", "");
  }
  while (result.indexOf(".") > 0) {
    result = result.replace(".", "");
  }
  return result;
};

libraries.forEach((libraryName) => {
  const components = [];

  const folder = testFolder + libraryName + iconFolder;
  // read icons
  const icons = fs.readdirSync(folder);
  icons.forEach((icon) => {
    if (icon.endsWith(iconExtension)) {
      const name = icon.replace(iconExtension, "");

      const component = {
        id: libraryName + "://" + name,
        name: name,
        icon: iconPath + libraryName + iconFolder + name + iconExtension,
        model3D: modelPath + libraryName + modelFolder + name + modelExtension,
        scale: 1.0
      }
      components.push(component);
    }
  });

  // try with another suffix
  if (components.length == 0) {
    const folder = testFolder + libraryName + iconFolder;
    // read icons
    const icons = fs.readdirSync(folder);
    icons.forEach((icon) => {
      if (icon.endsWith(iconExtension2)) {
        const name = icon.replace(iconExtension2, "");

        const component = {
          id: libraryName + "://" + name,
          name: name,
          icon: iconPath + libraryName + iconFolder + name + iconExtension2,
          model3D: modelPath + libraryName + modelFolder + name + modelExtension,
          scale: 1.0
        }
        components.push(component);
      }
    });

  }

  variableName = getVarName(libraryName);
  result += "const " + variableName + "Components = " + JSON.stringify(components) + "; \n";
});

result += "\n\n export const kenneyLibrary: Library[] = [";

libraries.forEach((libraryName) => {
  variableName = getVarName(libraryName);
  result += "{ name: 'kenney/" + libraryName + "', components: " + variableName + "Components},";
});

result += "]; ";

console.log(result);