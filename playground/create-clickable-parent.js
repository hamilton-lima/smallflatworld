var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    //This creates an arcRotate camera
    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 12, BABYLON.Vector3.Zero(), scene);

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    var sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {diameter: 2, segments: 32}, scene);

    // Move the sphere upward 1/2 its height
    sphere1.position.y = 1;

    // Our built-in 'sphere' shape.
    var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter: 2, segments: 32}, scene);
    sphere2.position = new BABYLON.Vector3(2, 2, 1);

    // Our built-in 'sphere' shape.
    var sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere3", {diameter: 2, segments: 32}, scene);
    sphere3.position = new BABYLON.Vector3(-3, 0, -2);

    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    let parent = new BABYLON.Mesh("parent", scene);

    sphere1.setParent(parent);
    sphere2.setParent(parent);
    sphere3.setParent(parent);
    ground.setParent(parent);

    let childMeshes = parent.getChildMeshes();

    let min = childMeshes[0].getBoundingInfo().boundingBox.minimumWorld;
    let max = childMeshes[0].getBoundingInfo().boundingBox.maximumWorld;

    for(let i=0; i<childMeshes.length; i++){
        let meshMin = childMeshes[i].getBoundingInfo().boundingBox.minimumWorld;
        let meshMax = childMeshes[i].getBoundingInfo().boundingBox.maximumWorld;

        min = BABYLON.Vector3.Minimize(min, meshMin);
        max = BABYLON.Vector3.Maximize(max, meshMax);
    }

    const boundingBoxInfo = new BABYLON.BoundingInfo(min, max);
    parent.setBoundingInfo(boundingBoxInfo);

    parent.showBoundingBox = true;
    parent.isPickable = false;
    console.log('parent', parent);
    console.log('bounding box vectors', boundingBoxInfo.boundingBox.vectors);

    var bb = boundingBoxInfo.boundingBox;
    var width = bb.maximum.x - bb.minimum.x;
    var height = bb.maximum.y - bb.minimum.y;
    var depth = bb.maximum.z - bb.minimum.z;

    var clickable = BABYLON.MeshBuilder.CreateBox(
        "clickable", 
        {width:width, height:height, depth:depth}, 
        scene);

    clickable.position = bb.center;
       
    clickable.setParent(parent);
    clickable.isPickable = true;
    clickable.isVisible = true;

    var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
	greenMat.emissiveColor = new BABYLON.Color3(0, 1, 0);
    greenMat.alpha = 0.0;
    clickable.material = greenMat;

     scene.onPointerDown = function (evt, pickResult) { 
         if( pickResult.pickedMesh){
         console.log('pickedMesh', pickResult.pickedMesh.name, pickResult.faceId);
         }
     };

    return scene;

};