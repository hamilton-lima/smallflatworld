import { Injectable } from '@angular/core';
import { Configuration } from './persistence.model';
import { Realm } from "../../../../server/src/events.model";

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

        const arrays = ['characters','elements', 'images', 'audios', 'codes', 'designs3D'];
 
        arrays.forEach(field => {
            console.warn('checking field on realm', field, realm[field]);
            if (realm[field] === undefined) {
                console.warn('field fixed', field);
                if (!result.updated) {
                    result.updated = realm;
                }
                realm[field] = [];
            }
        })

        return result;
    }
}