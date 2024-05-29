let cubes = [];

// Loop to calculate cubes of natural numbers up to 100
for (let i = 1; i <= 100; i++) {
    // Calculate cube of current number and push it to the cubes array
    cubes.push(i * i * i);
}

// Use document.write to print the cubes separated by commas
document.write(cubes.join(', '));
