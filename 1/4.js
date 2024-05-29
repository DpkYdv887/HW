// Initialize Fibonacci series with the first two values
let fibonacci = [0, 1];

// Loop to generate Fibonacci series up to the 100th value
for (let i = 2; i < 100; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] ;


}

// Use document.write to print the Fibonacci series separated by commas
document.write(fibonacci.join(', '));
