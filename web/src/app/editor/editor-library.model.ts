export class LibraryComponent {
  id: string;
  name: string;
  icon: string;
  model3D: string;
  scale: number;
  supportImage?: boolean;
  skipColision?:boolean;
}

export class Library {
  name: string;
  components: LibraryComponent[];
}
