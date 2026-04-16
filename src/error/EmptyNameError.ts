export class EmptyNameError extends Error {
    constructor(modelName: string) {
        super(`${modelName} não pode ter nome vazio.`);
        this.name = 'EmptyNameError';
    }
}