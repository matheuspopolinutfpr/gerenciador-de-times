import Student from '../model/Student';
import { expect, test } from '@jest/globals';

test("Teste do Student double", () => {
    let student = new Student();
    expect(student.getDouble(6)).toBe(10);
});

test("Teste do Student string", () => {
    let student = new Student();
    expect(student.getString()).toBe("teste");
});