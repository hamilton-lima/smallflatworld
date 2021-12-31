import { Injectable } from '@angular/core';
import { SceneAudio, SceneCode, SceneDesign3D, SceneElementMemento, SceneImage, Realm } from '../../../../colyseus-server/src/room.state';

class DataCheckResult {
    realm: Realm;
    updates: number;
}

@Injectable({
    providedIn: 'root',
})
export class PersistenceDataChecker {

    // check if the necessary properties are present 
    realmCheck(realm: Realm): DataCheckResult {
        console.warn('realm data check');
        const result = <DataCheckResult>{
            realm: realm,
            updates: 0
        };

        this.checkCharacter(result);
        this.checkElements(result);

        if (result.realm.images === undefined) {
            result.realm.images = new Map<string, SceneImage>();
        }

        if (Array.isArray(result.realm.elements)) {
            const replacement = new Map<string, SceneImage>();
            result.realm.images.forEach(one => {
                replacement.set(one.name, one);
            });
            result.realm.images = replacement;
        }

        if (result.realm.audios === undefined) {
            result.realm.audios = new Map<string, SceneAudio>();
        }

        if (Array.isArray(result.realm.audios)) {
            const replacement = new Map<string, SceneAudio>();
            result.realm.audios.forEach(one => {
                replacement.set(one.name, one);
            });
            result.realm.audios = replacement;
        }

        if (result.realm.codes === undefined) {
            result.realm.codes = new Map<string, SceneCode>();
        }

        if (Array.isArray(result.realm.codes)) {
            const replacement = new Map<string, SceneCode>();
            result.realm.codes.forEach(one => {
                replacement.set(one.name, one);
            });
            result.realm.codes = replacement;
        }

        if (result.realm.designs3D === undefined) {
            result.realm.designs3D = new Map<string, SceneDesign3D>();
        }

        if (Array.isArray(result.realm.designs3D)) {
            const replacement = new Map<string, SceneDesign3D>();
            result.realm.designs3D.forEach(one => {
                replacement.set(one.name, one);
            });
            result.realm.designs3D = replacement;
        }

        console.log('after check', result);
        return result;
    }

    private checkElements(result: DataCheckResult) {
        if (result.realm.elements === undefined) {
            result.realm.elements = new Map<string, SceneElementMemento>();
        }

        if (Array.isArray(result.realm.elements)) {
            const replacement = new Map<string, SceneElementMemento>();
            result.realm.elements.forEach(one => {
                replacement.set(one.name, one);
            });
            result.realm.elements = replacement;
        }
    }

    private checkCharacter(result: DataCheckResult) {
        console.log('characters 4', result.realm.characters);
        if (result.realm.characters === undefined) {
            result.realm.characters = new Map<string, SceneElementMemento>();
            result.updates++;
        }

        console.log('characters after 3', result.realm.characters);
        if (Array.isArray(result.realm.characters)) {
            const replacement = new Map<string, SceneElementMemento>();
            result.realm.characters.forEach(one => {
                replacement.set(one.name, one);
            });
            result.realm.characters = replacement;
            result.updates++;
        }

        console.log('characters after 1', result.realm.characters);
    }
}