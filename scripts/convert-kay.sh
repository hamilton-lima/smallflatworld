#!/bin/bash

find ../web/src/assets/library/kaykit/kayyit-dungeon-pack-1/animations -name "*.fbx" -exec ./FBX2glTF-linux-x64 --binary --draco --verbose --no-flip-v --input {} \;

mv *.glb ../web/src/assets/library/kaykit/kayyit-dungeon-pack-1/animations