// Plant 
function getYieldForPlant(plant, environmentFactors) {
    const yieldOfPlant = plant.yield;

    if (environmentFactors == undefined) {
        return yieldOfPlant;
    }
    let totalFactor = yieldOfPlant;

    if (environmentFactors !== undefined) {
        totalFactor = calculateYieldWithInfluence(environmentFactors.sun, plant.factors.sun, totalFactor);
    }

    return totalFactor;
}

module.exports = {
    getYieldForPlant,
    
}