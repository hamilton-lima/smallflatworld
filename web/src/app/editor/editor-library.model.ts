export class LibraryComponent {
  id: string;
  name: string;
  icon: string;
  model3D: string;
}

export const PRIMITIVE_COMPONENT = <LibraryComponent>{
  id: "primitive://box",
  name: 'box',
  icon: '',
  model3D: '',
};

export class Library {
  name: string;
  components: LibraryComponent[];
}
