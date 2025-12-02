// 19. Check if Integer is Within 20 of 100 or 400

// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function check20(number) {
    return (Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20);
}