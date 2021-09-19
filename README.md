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

web
- only send update events if connected,sharing/joined
- update 3D scene with events from server, link client.onUpdate events with renderer
- send player position updates, at realmService.updateCharacter send events to multiplayer

multiplayer
- when sharing, disable join button
- add event when changing realm
- update current realm after joining

- add edit mode to 3D
- change edit mode to stack elements, maybe highlight target of the creation?
- add library of 3D elements to the UI (bottom)
- add jump
- add on click event handler to 3D element - introduce code ui with blocks
- add function to display message 
- add shared state of the realm available to the coding with blocks

- add all kenney resources as libraries

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