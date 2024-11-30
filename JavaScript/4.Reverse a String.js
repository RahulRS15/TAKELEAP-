function reverseString(str) {
    // Convert string to array, reverse the array, and join it back to a string
    return str.split('').reverse().join('');
}

// Example usage
const originalString = 'Hello, World!';
const reversedString = reverseString(originalString);
console.log('Original String:', originalString);
console.log('Reversed String:', reversedString);
