import { Library } from './editor-library.model';

const survivalKit1 = [
  {
    id: 'survival-kit-1.0://bedrollFrame',
    name: 'bedrollFrame',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollFrame_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/bedrollFrame.glb',
  },
  {
    id: 'survival-kit-1.0://bedrollPacked',
    name: 'bedrollPacked',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedrollPacked_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/bedrollPacked.glb',
  },
  {
    id: 'survival-kit-1.0://bedroll',
    name: 'bedroll',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/bedroll_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/bedroll.glb',
  },
  {
    id: 'survival-kit-1.0://campfire',
    name: 'campfire',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/campfire_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/campfire.glb',
  },
  {
    id: 'survival-kit-1.0://chest',
    name: 'chest',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/chest_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/chest.glb',
  },
  {
    id: 'survival-kit-1.0://fenceFortified',
    name: 'fenceFortified',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fenceFortified_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/fenceFortified.glb',
  },
  {
    id: 'survival-kit-1.0://fence',
    name: 'fence',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/fence_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/fence.glb',
  },
  {
    id: 'survival-kit-1.0://floor',
    name: 'floor',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/floor_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/floor.glb',
  },
  {
    id: 'survival-kit-1.0://grassLarge',
    name: 'grassLarge',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grassLarge_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/grassLarge.glb',
  },
  {
    id: 'survival-kit-1.0://grass',
    name: 'grass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/grass_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/grass.glb',
  },
  {
    id: 'survival-kit-1.0://resourceStone',
    name: 'resourceStone',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceStone_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/resourceStone.glb',
  },
  {
    id: 'survival-kit-1.0://resourceWood',
    name: 'resourceWood',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/resourceWood_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/resourceWood.glb',
  },
  {
    id: 'survival-kit-1.0://rockA',
    name: 'rockA',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockA_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockA.glb',
  },
  {
    id: 'survival-kit-1.0://rockB',
    name: 'rockB',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockB_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockB.glb',
  },
  {
    id: 'survival-kit-1.0://rockC',
    name: 'rockC',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockC_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockC.glb',
  },
  {
    id: 'survival-kit-1.0://rockFlatGrass',
    name: 'rockFlatGrass',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlatGrass_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/rockFlatGrass.glb',
  },
  {
    id: 'survival-kit-1.0://rockFlat',
    name: 'rockFlat',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/rockFlat_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/rockFlat.glb',
  },
  {
    id: 'survival-kit-1.0://signpost',
    name: 'signpost',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/signpost_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/signpost.glb',
  },
  {
    id: 'survival-kit-1.0://structureBase',
    name: 'structureBase',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureBase_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureBase.glb',
  },
  {
    id: 'survival-kit-1.0://structureCloth',
    name: 'structureCloth',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureCloth_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureCloth.glb',
  },
  {
    id: 'survival-kit-1.0://structureRoof',
    name: 'structureRoof',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structureRoof_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/structureRoof.glb',
  },
  {
    id: 'survival-kit-1.0://structure',
    name: 'structure',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/structure_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/structure.glb',
  },
  {
    id: 'survival-kit-1.0://tentClosed',
    name: 'tentClosed',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentClosed_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/tentClosed.glb',
  },
  {
    id: 'survival-kit-1.0://tentHalf',
    name: 'tentHalf',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tentHalf_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tentHalf.glb',
  },
  {
    id: 'survival-kit-1.0://tent',
    name: 'tent',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tent_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tent.glb',
  },
  {
    id: 'survival-kit-1.0://toolAxe',
    name: 'toolAxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolAxe_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/toolAxe.glb',
  },
  {
    id: 'survival-kit-1.0://toolHoe',
    name: 'toolHoe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolHoe_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/toolHoe.glb',
  },
  {
    id: 'survival-kit-1.0://toolPickaxe',
    name: 'toolPickaxe',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/toolPickaxe_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/toolPickaxe.glb',
  },
  {
    id: 'survival-kit-1.0://treeFall',
    name: 'treeFall',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/treeFall_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/treeFall.glb',
  },
  {
    id: 'survival-kit-1.0://tree',
    name: 'tree',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/tree_E.png',
    model3D: 'library/kenney/survival-kit-1.0/Models/GLTF format/tree.glb',
  },
  {
    id: 'survival-kit-1.0://workbenchAnvil',
    name: 'workbenchAnvil',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchAnvil_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/workbenchAnvil.glb',
  },
  {
    id: 'survival-kit-1.0://workbenchGrind',
    name: 'workbenchGrind',
    icon: 'assets/library/kenney/survival-kit-1.0/Isometric/workbenchGrind_E.png',
    model3D:
      'library/kenney/survival-kit-1.0/Models/GLTF format/workbenchGrind.glb',
  },
  {
    id: 'survival-kit-1.0://workbench',
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
