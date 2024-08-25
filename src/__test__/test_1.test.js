const { fishBash } = require('../test_1');

describe('fishBash', () => {
    beforeEach(() => {
        // Sebelum setiap test, clear mock call history
        console.log = jest.fn();
    });

    it('should print "fish" for numbers divisible by 3, "bash" for numbers divisible by 5, and "fish bash" for numbers divisible by 15', () => {
        fishBash(15); // Menjalankan fungsi dengan limit 15 sebagai contoh
        expect(console.log.mock.calls[2][0]).toBe('fish'); // 3 habis dibagi 3
        expect(console.log.mock.calls[4][0]).toBe('bash'); // 5 habis dibagi 5
        expect(console.log.mock.calls[14][0]).toBe('fish bash'); // 15 habis dibagi 15
    });

    it('should print numbers for numbers not divisible by 3 or 5', () => {
        fishBash(2); // Menjalankan fungsi dengan limit 2 sebagai contoh
        expect(console.log.mock.calls[0][0]).toBe(1); // Harus mencetak 1
        expect(console.log.mock.calls[1][0]).toBe(2); // Harus mencetak 2
    });

    afterEach(() => {
        // Membersihkan mock setelah setiap test case
        jest.clearAllMocks();
    });
});