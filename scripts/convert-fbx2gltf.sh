#!/bin/bash

wget https://github.com/facebookincubator/FBX2glTF/releases/download/v0.9.7/FBX2glTF-linux-x64
chmod +x FBX2glTF-linux-x64

./FBX2glTF-linux-x64 --binary --draco --verbose --no-flip-v \
          --input  ../web/src/assets/character/model/characterMedium.fbx \
          --output  ../web/src/assets/character/model/characterMedium.glb

./FBX2glTF-linux-x64 --binary --draco --verbose --no-flip-v \
          --input  ../web/src/assets/character/animations/idle.fbx \
          --output  ../web/src/assets/character/animations/idle.glb

./FBX2glTF-linux-x64 --binary --draco --verbose --no-flip-v \
          --input  ../web/src/assets/character/animations/jump.fbx \
          --output  ../web/src/assets/character/animations/jump.glb

./FBX2glTF-linux-x64 --binary --draco --verbose --no-flip-v \
          --input  ../web/src/assets/character/animations/run.fbx \
          --output  ../web/src/assets/character/animations/run.glb

rm FBX2glTF-linux-x64          