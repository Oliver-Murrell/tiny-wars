import { sum } from './main';

describe('sum', () => {
    test('5 + 2 = 7', () => {
        expect(sum(5, 2)).toBe(7);
    })
    test('6 + 6 = 12', () => {
        expect(sum(6, 6)).toBe(12);
    })
    test('2 + 3 = 5', () => {
        expect(sum(2, 3)).toBe(5);
    })
    test('0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    test('-5 + 5 = 0', () => {
        expect(sum(-5, 5)).toBe(0);
    })
})