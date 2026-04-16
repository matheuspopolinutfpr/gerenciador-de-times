export class ValidationError extends Error {
    constructor(modelName: string) {
        super(`${modelName} não pode ter nome vazio.`);
        this.name = 'ValidationError';
    }
}