const testFolder = '../web/src/assets/library/kenney/survival-kit-1.0/Isometric/';
const modelExtension = ".glb";
const iconExtension = "_E.png";
const fs = require('fs');
modelPath = "library/kenney/survival-kit-1.0/Models/GLTF format/";
iconPath = "assets/library/kenney/survival-kit-1.0/Isometric/";

result =[];
fs.readdirSync(testFolder).forEach(file => {
  const name = file.replace(iconExtension, "");
  const component = { 
      name: name,
      icon: iconPath + name + iconExtension,
      model3D: modelPath + name + modelExtension,
  }
  result.push(component);
});

console.log(JSON.stringify(result));
