import { SceneElementMemento } from '../../../../server/src/events.model';

export class Realm {
  id: string;
  name: string;
  character: SceneElementMemento;
  elements: SceneElementMemento[];
}

export class Configuration {
  id: string;
  currentRealm: string;
}
