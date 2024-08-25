const { sortArray } = require('../test_2');

describe('sortArray', () => {
    it('should sort the array in ascending and descending order', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6];
        const expectedAscending = [1, 1, 2, 3, 4, 5, 6, 9];
        const expectedDescending = [9, 6, 5, 4, 3, 2, 1, 1];
        const { ascending, descending } = sortArray(input);
        expect(ascending).toEqual(expectedAscending);
        expect(descending).toEqual(expectedDescending);
    });
});