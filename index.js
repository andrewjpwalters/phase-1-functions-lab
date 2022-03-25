// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block)
};

function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
};

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
};

function calculatesFarePrice(start, end) {
    const feet = distanceTravelledInFeet(start, end);
    if (feet < 400) {
        return 0
    }
    else if (feet > 2500) {
        return "cannot travel that far"
    }
    else if (feet > 2000) {
        return 25
    } else {
        return (feet - 400) * 0.02
    }
}