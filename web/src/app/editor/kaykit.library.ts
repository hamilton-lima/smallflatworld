import { Library } from './editor-library.model';

const dungeon = [
  {
    id: 'kaykit/dungeon://one',
    name: 'one',
    icon: 'assets/library/kaykit/',
    model3D:
      'library/kaykit/kayyit-dungeon-pack-1/scenario/scaffold_small_medium.gltf.glb',
      scale: 1.0
  },
];

export const kaykitLibrary: Library[] = [
  { name: 'kaykit/dungeon', components: dungeon },
];
