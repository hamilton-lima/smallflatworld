import { Library } from './editor-library.model';

const survivalKit1 = [
  {
    name: 'bedrollFrame',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollFrame_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/bedrollFrame.glb',
  },
  {
    name: 'bedrollPacked',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollPacked_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/bedrollPacked.glb',
  },
  {
    name: 'bedroll',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedroll_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/bedroll.glb',
  },
  {
    name: 'campfire',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/campfire_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/campfire.glb',
  },
  {
    name: 'chest',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/chest_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/chest.glb',
  },
  {
    name: 'fenceFortified',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fenceFortified_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/fenceFortified.glb',
  },
  {
    name: 'fence',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fence_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/fence.glb',
  },
  {
    name: 'floor',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/floor_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/floor.glb',
  },
  {
    name: 'grassLarge',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grassLarge_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/grassLarge.glb',
  },
  {
    name: 'grass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grass_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/grass.glb',
  },
  {
    name: 'resourceStone',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceStone_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/resourceStone.glb',
  },
  {
    name: 'resourceWood',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceWood_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/resourceWood.glb',
  },
  {
    name: 'rockA',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockA_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockA.glb',
  },
  {
    name: 'rockB',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockB_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockB.glb',
  },
  {
    name: 'rockC',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockC_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockC.glb',
  },
  {
    name: 'rockFlatGrass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlatGrass_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/rockFlatGrass.glb',
  },
  {
    name: 'rockFlat',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlat_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockFlat.glb',
  },
  {
    name: 'signpost',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/signpost_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/signpost.glb',
  },
  {
    name: 'structureBase',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureBase_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureBase.glb',
  },
  {
    name: 'structureCloth',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureCloth_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureCloth.glb',
  },
  {
    name: 'structureRoof',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureRoof_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureRoof.glb',
  },
  {
    name: 'structure',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structure_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/structure.glb',
  },
  {
    name: 'tentClosed',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentClosed_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/tentClosed.glb',
  },
  {
    name: 'tentHalf',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentHalf_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tentHalf.glb',
  },
  {
    name: 'tent',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tent_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tent.glb',
  },
  {
    name: 'toolAxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolAxe_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/toolAxe.glb',
  },
  {
    name: 'toolHoe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolHoe_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/toolHoe.glb',
  },
  {
    name: 'toolPickaxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolPickaxe_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/toolPickaxe.glb',
  },
  {
    name: 'treeFall',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/treeFall_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/treeFall.glb',
  },
  {
    name: 'tree',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tree_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tree.glb',
  },
  {
    name: 'workbenchAnvil',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchAnvil_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/workbenchAnvil.glb',
  },
  {
    name: 'workbenchGrind',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchGrind_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/workbenchGrind.glb',
  },
  {
    name: 'workbench',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbench_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/workbench.glb',
  },
];

export const kenneyLibrary: Library[] = [
  {
    name: 'kenney/survival-kit-1.0',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockA_E.png',
    components: survivalKit1,
  },
];
