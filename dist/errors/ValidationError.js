"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(modelName) {
        super(`${modelName} não pode ter nome vazio.`);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
