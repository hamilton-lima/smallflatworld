# smallflatworld

Web 3D programable sandbox

## Goals

- 3D programmable sandbox
- Easy to share creations offline, download and upload files
- Easy to colaborate using small footprint server
- Easy to import 3D models from https://www.tinkercad.com
- Allow users to code behavior of scenario elements
- Allow creation of stories

## Roadmap

editor
- remove add pink box
- pick default library
- when selecting library change mode to ADD

coding
- add on click event handler to 3D element 
  - introduce code ui with blocks
- add function to display message
- add shared state of the realm available to the coding with blocks

deployment
- create docker image and deployment automation

actions
- add jump
  - add physics to the objects 

realm management
- create new

editor
- add keybinds for edit actions
- center rotation point at the center of the bounding box
- add predefined scale for each library
- add option to snap city road elements only by the sides
- add portal component
- move mesh cache to realm database 

multiplayer
- when receiving update/add fix use the correct mesh template
- when propagating events skip the sender
- wait for the full state of the realm after joining and update current realm
- send player position updates, at realmService.updateCharacter send events to multiplayer
- when sharing, disable join button
- add event when changing realm

scenario
- enable VR experience 
- prevent movement outside the box
- add procedural skybox with https://www.kenney.nl/assets/background-elements
- adding moving sun light

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

- fix saving location of the character

actions
- replace red box with running boy model

editor
- delete element

- drag elements

- snap to the center of the selected surface, decide if the snap is on the side, top or bottom based on position
  - face detection example 
  https://playground.babylonjs.com/#D1Z1VL#3
  
  - use this idea + PickInfo to define the boundingbox picked 
  https://www.babylonjs-playground.com/#35HAW1#1
  - other idea to apply the correct rotation
  https://playground.babylonjs.com/#TZTHV1#1
  

- add up editor function
- update realm with scale

- select scene element
- plus / minus with options : rotate, scale, height

- add edit mode to 3D
- add camera control
scenario
- add more light to the environment, everything seems a little bit shady ;)

editor
- improve performance of scene loading
  - measure current time
  - check cache

- fix manually library piratekit-1.1\Models\glTF format
- add option to choose current library
- add all kenney resources as libraries, update existing script to load from several folders
- add skybox
- reload scene with the correct meshes
- fix load of objects with submeshes
- fix stack objects, second instance is not stacking
- save sceneElement information of the mesh used
- change edit mode to stack elements, maybe highlight target of the creation?
- add sceneelement type to identify the asset used
