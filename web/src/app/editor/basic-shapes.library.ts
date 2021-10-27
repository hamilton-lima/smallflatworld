import { Library } from './editor-library.model';

const shapes = [
  {
    id: 'internal/basic://cube',
    name: 'cube',
    icon: 'assets/library/basic/cube.png',
    model3D:
      'library/basic/cube.glb',
      scale: 1.0
  },
];

export const basicShapesLibrary: Library[] = [
  { name: 'internal/basic', components: shapes },
];
