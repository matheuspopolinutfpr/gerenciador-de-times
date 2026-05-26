export default class Repository<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public list(): T[] {
        return [...this.items];
    }

    public filter(predicate: (t: T) => boolean): T[] {
        return this.items.filter(predicate);
    }

    public findBy<K extends keyof T>(key: K, value: T[K]): T[] {
        return this.items.filter(i => i[key] === value);
    }

    public get length(): number {
        return this.items.length;
    }
}
