// Plant 
function getYieldForPlant(plant, environmentFactors) {
    const yieldOfPlant = plant.yield;

    if (environmentFactors == undefined) {
        return yieldOfPlant;
    }
    let totalFactor = yieldOfPlant;

    return totalFactor;
}

module.exports = getYieldForPlant