// Define the callback function
function greet(name) {
    console.log('Hello, ' + name + '!');
}

// Define a function that accepts a callback
function processUserInput(callback) {
    const name = 'Alice';
    callback(name);
}

// Call the function with the callback
processUserInput(greet);
