export class LibraryComponent {
  id: string;
  name: string;
  icon: string;
  model3D: string;
}

export class Library {
  name: string;
  components: LibraryComponent[];
}
