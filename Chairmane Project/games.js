const shapes = [
    { name: "Circle", emoji: "⚪" },
    { name: "Square", emoji: "⬜" },
    { name: "Triangle", emoji: "🔺" },
    { name: "Rectangle", emoji: "▬" },
    { name: "Star", emoji: "⭐" },
    { name: "Heart", emoji: "❤️" }
];

let currentShape;

// Start the matching game
function startMatchingGame() {
    currentShape = shapes[Math.floor(Math.random() * shapes.length)];
    document.getElementById("shape-display").innerHTML = `<p style="font-size: 150px;">${currentShape.emoji}</p>`; // Adjusted font size for shapes
    generateShapeOptions();
}

// Generate options for shape names
function generateShapeOptions() {
    const options = document.getElementById("shape-options");
    options.innerHTML = ""; // Clear previous options

    shapes.forEach(shape => {
        const button = document.createElement("button");
        button.innerText = shape.name;
        button.onclick = () => checkShapeAnswer(shape.name);
        options.appendChild(button);
    });
}

// Check if the selected answer is correct
function checkShapeAnswer(selectedName) {
    if (selectedName === currentShape.name) {
        alert("Correct!");
        // Delay before moving to the next shape question
        setTimeout(() => {
            startMatchingGame();
        }, 1000); // Delay of 1000 milliseconds (1 second)
    } else {
        alert("Try again!");
    }
}

// Start the counting game
function startCountingGame() {
    const count = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const objectsDisplay = document.getElementById("counting-display");
    objectsDisplay.innerHTML = ""; // Clear previous objects

    // Display the random number of stars with specified size
    for (let i = 0; i < count; i++) {
        objectsDisplay.innerHTML += `<span style="font-size: 50px;">⭐</span>`; // Adjusted font size for stars
    }

    generateCountingOptions(count);
}

// Generate options for counting game (now includes numbers 1 to 10)
function generateCountingOptions(correctCount) {
    const options = document.getElementById("counting-options");
    options.innerHTML = ""; // Clear previous options

    for (let i = 1; i <= 10; i++) { // Change the range from 1 to 10
        const button = document.createElement("button");
        button.innerText = i;
        button.onclick = () => checkCountingAnswer(i, correctCount);
        options.appendChild(button);
    }
}

// Check if the selected number is correct
function checkCountingAnswer(selectedNumber, correctCount) {
    if (selectedNumber === correctCount) {
        alert("Correct!");
        // Delay before moving to the next counting question
        setTimeout(() => {
            startCountingGame();
        }, 1000); // Delay of 1000 milliseconds (1 second)
    } else {
        alert("Try again!");
    }
}
