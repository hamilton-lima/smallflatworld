import { Library } from './editor-library.model';

const survivalKit1 = [
  {
    name: 'bedrollFrame',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollFrame.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/bedrollFrame.glb',
  },
  {
    name: 'bedrollPacked',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollPacked.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/bedrollPacked.glb',
  },
  {
    name: 'bedroll',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedroll.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/bedroll.glb',
  },
  {
    name: 'campfire',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/campfire.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/campfire.glb',
  },
  {
    name: 'chest',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/chest.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/chest.glb',
  },
  {
    name: 'fenceFortified',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fenceFortified.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/fenceFortified.glb',
  },
  {
    name: 'fence',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fence.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/fence.glb',
  },
  {
    name: 'floor',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/floor.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/floor.glb',
  },
  {
    name: 'grassLarge',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grassLarge.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/grassLarge.glb',
  },
  {
    name: 'grass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grass.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/grass.glb',
  },
  {
    name: 'resourceStone',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceStone.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/resourceStone.glb',
  },
  {
    name: 'resourceWood',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceWood.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/resourceWood.glb',
  },
  {
    name: 'rockA',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockA.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/rockA.glb',
  },
  {
    name: 'rockB',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockB.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/rockB.glb',
  },
  {
    name: 'rockC',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockC.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/rockC.glb',
  },
  {
    name: 'rockFlatGrass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlatGrass.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/rockFlatGrass.glb',
  },
  {
    name: 'rockFlat',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlat.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/rockFlat.glb',
  },
  {
    name: 'signpost',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/signpost.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/signpost.glb',
  },
  {
    name: 'structureBase',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureBase.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/structureBase.glb',
  },
  {
    name: 'structureCloth',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureCloth.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/structureCloth.glb',
  },
  {
    name: 'structureRoof',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureRoof.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/structureRoof.glb',
  },
  {
    name: 'structure',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structure.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/structure.glb',
  },
  {
    name: 'tentClosed',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentClosed.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/tentClosed.glb',
  },
  {
    name: 'tentHalf',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentHalf.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/tentHalf.glb',
  },
  {
    name: 'tent',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tent.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/tent.glb',
  },
  {
    name: 'toolAxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolAxe.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/toolAxe.glb',
  },
  {
    name: 'toolHoe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolHoe.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/toolHoe.glb',
  },
  {
    name: 'toolPickaxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolPickaxe.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/toolPickaxe.glb',
  },
  {
    name: 'treeFall',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/treeFall.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/treeFall.glb',
  },
  {
    name: 'tree',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tree.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/tree.glb',
  },
  {
    name: 'workbenchAnvil',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchAnvil.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/workbenchAnvil.glb',
  },
  {
    name: 'workbenchGrind',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchGrind.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/workbenchGrind.glb',
  },
  {
    name: 'workbench',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbench.png',
    model3D:
      'assets/library/kenney/survival-kit-1.0/Models/GLTF format/workbench.glb',
  },
];

export const kenneyLibrary: Library[] = [
  {
    name: 'kenney/survival-kit-1.0',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockA_E.png',
    components: survivalKit1,
  },
  {
    name: 'kenney/survival-kit-1.0 -B',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureBase_E.png',
    components: survivalKit1,
  },
];