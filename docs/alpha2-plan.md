# Roadmap

## Release Alfa2 0.5.0
- Custom images on scenario
- Play sound effects
- Create scenario using code
- Code together

## Action plan

### Custom images
- Add basic shapes library with cube 
- Add library of images 
  - upload image + save in the realm
  - sync realm update of image library
- Add properties input WHEN creating basic shapes
- Add properties to basic shapes to change image 
  - example on how wrap 6 faces on the cube https://playground.babylonjs.com/#ICLXQ8

  - add some images from minescraft as out of the box images
    - https://aka.ms/resourcepacktemplate
    - https://www.curseforge.com/minecraft/texture-packs/faithful-team/files
    - https://www.minecraft.net/en-us/article/try-new-minecraft-textures

- Add Copy and Paste

### Audio
- Add code function to play audio
- Add audio library to the realm - explore using strings to define the sound or OGG files

- Add function to create scenario elements
- Display mouse position and character position - to be used as reference 
for the create scenario code
- Add legs to the character or wheels :)
- Add mixpanel.com tracking (timeboxed)

Multiplayer notes
- Auto generate user name
- Allow to update names
- Send player position updates and user name
- Fix mesh template when receiving udpates
- Show other user character name above the character
- Wait for the full state of the scenario to load before sync
- Synchronize code updates
