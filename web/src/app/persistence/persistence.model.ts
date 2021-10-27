import { SceneElementMemento, SceneImage } from '../../../../server/src/events.model';

export class Realm {
  id: string;
  name: string;
  character: SceneElementMemento;
  elements: SceneElementMemento[];
  images: SceneImage[];
}

export class Configuration {
  id: string;
  currentRealm: string;
}
