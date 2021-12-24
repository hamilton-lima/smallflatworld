import { SceneAudio, SceneCode, SceneDesign3D, SceneElementMemento, SceneImage } from '../../../../server/src/events.model';

export class Realm {
  id: string;
  name: string;
  character: SceneElementMemento;
  elements: SceneElementMemento[];
  images: SceneImage[];
  audios: SceneAudio[];
  codes: SceneCode[];
  designs3D: SceneDesign3D[];
}

export class Configuration {
  id: string;
  currentRealm: string;
}
