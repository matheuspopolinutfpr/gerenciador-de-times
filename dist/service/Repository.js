"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    list() {
        return [...this.items];
    }
    filter(predicate) {
        return this.items.filter(predicate);
    }
    findBy(key, value) {
        return this.items.filter(i => i[key] === value);
    }
    get length() {
        return this.items.length;
    }
}
exports.default = Repository;
