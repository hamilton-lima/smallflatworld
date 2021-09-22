export class LibraryComponent {
  name: string;
  icon: string;
  model3D: string;
}

export const PRIMITIVE_COMPONENT = <LibraryComponent>{
  name: 'primitive',
  icon: '',
  model3D: '',
};

export class Library {
  name: string;
  icon: string;
  components: LibraryComponent[];
}
