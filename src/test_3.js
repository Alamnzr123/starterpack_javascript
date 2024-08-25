function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("Aku mau Makan"));

module.exports = { isPalindrome };