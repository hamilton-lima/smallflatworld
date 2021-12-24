import { Injectable } from '@angular/core';
import { Realm, Configuration } from './persistence.model';
import { SceneElementMemento } from '../../../../server/src/events.model';

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

        const fields = ['elements', 'images', 'audios', 'codes', 'designs3D'];
        fields.forEach(field => {
            console.warn('checking', field, realm[field]);
            if (realm[field] === undefined) {
                console.warn('field', field);
                if (!result.updated) {
                    result.updated = realm;
                }
                realm[field] = [];
            }
        })

        return result;
    }
}