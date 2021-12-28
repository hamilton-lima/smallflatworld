"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Realm = exports.SceneCode = exports.SceneAudio = exports.SceneDesign3D = exports.SceneImage = exports.SceneElementMemento = exports.CodeDefinition = exports.Vector3Memento = void 0;
const schema_1 = require("@colyseus/schema");
class Vector3Memento extends schema_1.Schema {
}
__decorate([
    schema_1.type("number")
], Vector3Memento.prototype, "x", void 0);
__decorate([
    schema_1.type("number")
], Vector3Memento.prototype, "y", void 0);
__decorate([
    schema_1.type("number")
], Vector3Memento.prototype, "z", void 0);
exports.Vector3Memento = Vector3Memento;
class CodeDefinition extends schema_1.Schema {
}
__decorate([
    schema_1.type("string")
], CodeDefinition.prototype, "code", void 0);
__decorate([
    schema_1.type("string")
], CodeDefinition.prototype, "blocklyDefinition", void 0);
exports.CodeDefinition = CodeDefinition;
class SceneElementMemento extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.position = new Vector3Memento();
        this.rotation = new Vector3Memento();
        this.scaling = new Vector3Memento();
        this.code = new CodeDefinition();
    }
}
__decorate([
    schema_1.type("string")
], SceneElementMemento.prototype, "name", void 0);
__decorate([
    schema_1.type("string")
], SceneElementMemento.prototype, "componentID", void 0);
__decorate([
    schema_1.type(Vector3Memento)
], SceneElementMemento.prototype, "position", void 0);
__decorate([
    schema_1.type(Vector3Memento)
], SceneElementMemento.prototype, "rotation", void 0);
__decorate([
    schema_1.type(Vector3Memento)
], SceneElementMemento.prototype, "scaling", void 0);
__decorate([
    schema_1.type(CodeDefinition)
], SceneElementMemento.prototype, "code", void 0);
__decorate([
    schema_1.type("string")
], SceneElementMemento.prototype, "imageName", void 0);
__decorate([
    schema_1.type("boolean")
], SceneElementMemento.prototype, "skipColision", void 0);
exports.SceneElementMemento = SceneElementMemento;
class SceneImage extends schema_1.Schema {
}
__decorate([
    schema_1.type("string")
], SceneImage.prototype, "name", void 0);
__decorate([
    schema_1.type("string")
], SceneImage.prototype, "base64", void 0);
exports.SceneImage = SceneImage;
class SceneDesign3D extends schema_1.Schema {
}
__decorate([
    schema_1.type("string")
], SceneDesign3D.prototype, "name", void 0);
__decorate([
    schema_1.type("string")
], SceneDesign3D.prototype, "base64", void 0);
exports.SceneDesign3D = SceneDesign3D;
class SceneAudio extends schema_1.Schema {
}
__decorate([
    schema_1.type("string")
], SceneAudio.prototype, "name", void 0);
__decorate([
    schema_1.type("string")
], SceneAudio.prototype, "base64", void 0);
exports.SceneAudio = SceneAudio;
class SceneCode extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.code = new CodeDefinition();
    }
}
__decorate([
    schema_1.type("string")
], SceneCode.prototype, "name", void 0);
__decorate([
    schema_1.type("string")
], SceneCode.prototype, "label", void 0);
__decorate([
    schema_1.type(CodeDefinition)
], SceneCode.prototype, "code", void 0);
exports.SceneCode = SceneCode;
class Realm extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.characters = new schema_1.ArraySchema();
        this.elements = new schema_1.ArraySchema();
        this.images = new schema_1.ArraySchema();
        this.audios = new schema_1.ArraySchema();
        this.codes = new schema_1.ArraySchema();
        this.designs3D = new schema_1.ArraySchema();
    }
}
__decorate([
    schema_1.type("string")
], Realm.prototype, "id", void 0);
__decorate([
    schema_1.type("string")
], Realm.prototype, "name", void 0);
__decorate([
    schema_1.type([SceneElementMemento])
], Realm.prototype, "characters", void 0);
__decorate([
    schema_1.type([SceneElementMemento])
], Realm.prototype, "elements", void 0);
__decorate([
    schema_1.type([SceneImage])
], Realm.prototype, "images", void 0);
__decorate([
    schema_1.type([SceneAudio])
], Realm.prototype, "audios", void 0);
__decorate([
    schema_1.type([SceneCode])
], Realm.prototype, "codes", void 0);
__decorate([
    schema_1.type([SceneDesign3D])
], Realm.prototype, "designs3D", void 0);
exports.Realm = Realm;
