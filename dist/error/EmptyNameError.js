"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyNameError = void 0;
class EmptyNameError extends Error {
    constructor(modelName) {
        super(`${modelName} não pode ter nome vazio.`);
        this.name = 'EmptyNameError';
    }
}
exports.EmptyNameError = EmptyNameError;
