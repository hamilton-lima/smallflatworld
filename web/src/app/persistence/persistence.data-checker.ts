import { Injectable } from '@angular/core';
import { Realm, SceneAudio, SceneCode, SceneDesign3D, SceneElementMemento, SceneImage } from '../../../../colyseus-server/src/room.state';
import { Configuration } from './persistence.model';
import { MapSchema } from '@colyseus/schema';

class DataCheckResult {
    original: Realm | Configuration;
    updated: Realm | Configuration;
}

@Injectable({
    providedIn: 'root',
})
export class PersistenceDataChecker {

    // check if the necessary properties are present 
    realmCheck(realm: Realm): DataCheckResult {
        console.warn('realmCheck');
        const result = <DataCheckResult>{
            original: realm
        };

        if (realm.characters === undefined) {
            realm.characters = new MapSchema<SceneElementMemento>();
        }

        if (Array.isArray(realm.characters)) {
            const replacement = new MapSchema<SceneElementMemento>();
            realm.characters.forEach(one => replacement.set(one.name, one));
            realm.characters = replacement;
        }

        if (realm.elements === undefined) {
            realm.elements = new MapSchema<SceneElementMemento>();
        }

        if (Array.isArray(realm.elements)) {
            const replacement = new MapSchema<SceneElementMemento>();
            realm.elements.forEach(one => replacement.set(one.name, one));
            realm.elements = replacement;
        }

        if (realm.images === undefined) {
            realm.images = new MapSchema<SceneImage>();
        }

        if (Array.isArray(realm.elements)) {
            const replacement = new MapSchema<SceneImage>();
            realm.images.forEach(one => replacement.set(one.name, one));
            realm.images = replacement;
        }

        if (realm.audios === undefined) {
            realm.audios = new MapSchema<SceneAudio>();
        }

        if (Array.isArray(realm.audios)) {
            const replacement = new MapSchema<SceneAudio>();
            realm.audios.forEach(one => replacement.set(one.name, one));
            realm.audios = replacement;
        }

        if (realm.codes === undefined) {
            realm.codes = new MapSchema<SceneCode>();
        }

        if (Array.isArray(realm.codes)) {
            const replacement = new MapSchema<SceneCode>();
            realm.codes.forEach(one => replacement.set(one.name, one));
            realm.codes = replacement;
        }

        if (Array.isArray(realm.designs3D)) {
            const replacement = new MapSchema<SceneDesign3D>();
            realm.designs3D.forEach(one => replacement.set(one.name, one));
            realm.designs3D = replacement;
        }

        return result;
    }
}