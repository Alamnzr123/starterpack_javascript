const { isPalindrome } = require('../test_3');

describe('isPalindrome', () => {
    it('should return true for palindrome string', () => {
        expect(isPalindrome('malam')).toBe(true);
    });

    it('should return false for non-palindrome string', () => {
        expect(isPalindrome('Apakah')).toBe(false);
    });
});