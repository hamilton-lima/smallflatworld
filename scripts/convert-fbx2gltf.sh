#!/bin/bash

wget https://github.com/facebookincubator/FBX2glTF/releases/download/v0.9.7/FBX2glTF-linux-x64
chmod +x FBX2glTF-linux-x64
./FBX2glTF-linux-x64 --binary --draco --verbose \
          --input  ../web/src/assets/character/model/characterMedium.fbx \
          --output  ../web/src/assets/character/model/characterMedium.glb
rm FBX2glTF-linux-x64          