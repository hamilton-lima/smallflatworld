import { Library } from './editor-library.model';

export const INTERNAL_BASIC_LIBRARY = 'internal/basic';

const shapes = [
  {
    id: INTERNAL_BASIC_LIBRARY + '://cube',
    name: 'cube',
    icon: 'assets/library/basic/cube.png',
    supportImage: true,
    model3D:
      'library/basic/cube.glb',
      scale: 1.0
  },
];

export const basicShapesLibrary: Library[] = [
  { name: INTERNAL_BASIC_LIBRARY, components: shapes },
];
