# smallflatworld
Web 3D programable sandbox

## Goals
- 3D programmable sandbox 
- Easy to share creations offline, download and upload files
- Easy to colaborate using small footprint server
- Easy to import 3D models from https://www.tinkercad.com
- Allow users to code behavior of scenario elements
- Allow creation of stories 

## next steps 

editor
- add edit mode to 3D
- add all kenney resources as libraries, update existing script to load from several folders
- select scene element 
- delete element
- increase size
- rotate
- add camera control
- snap to the center of the selected surface, decide if the snap is on the side, top or bottom based on position

multiplayer
- wait for the full state of the realm after joining and update current realm
- send player position updates, at realmService.updateCharacter send events to multiplayer
- when sharing, disable join button
- add event when changing realm

scenario
- prevent movement outside the box
- add procedural skybox with https://www.kenney.nl/assets/background-elements
- adding moving sun light

actions
- replace red box with running boy model
- add jump

coding
- add on click event handler to 3D element - introduce code ui with blocks
- add function to display message 
- add shared state of the realm available to the coding with blocks

realm management
- create new 

## To be investigated

Rename user after join a realm
Plugins, to create programable parts of the engine
- create separated repository for approved plugins
- creation of plugins to allow custom UI generation and creation of scene elements
    - use JsonSchema as reference to create UI in plugins
    - create action to select a 3D position
    - register plugin with name to be displayed in the pallete
    - add command line similar to visual studio command pallete

How to integrate with other 3D formats and tools

## Done 

editor
- add skybox
- reload scene with the correct meshes 
- fix load of objects with submeshes
- fix stack objects, second instance is not stacking
- save sceneElement information of the mesh used
- change edit mode to stack elements, maybe highlight target of the creation?
- add sceneelement type to identify the asset used
- add option to choose current library
