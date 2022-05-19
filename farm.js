// Plant 
function getYieldForPlant(plant, environmentFactors) {
    const yieldOfPlant = plant.yield;

    if (environmentFactors == undefined) {
        return yieldOfPlant;
    }
    let totalFactor = yieldOfPlant;

    if (environmentFactors.sun !== undefined) {
        totalFactor = calculateYieldWithInfluence(environmentFactors.sun, plant.factors.sun, totalFactor);
    }

    if (environmentFactors.wind !== undefined) {
        totalFactor = calculateYieldWithInfluence(environmentFactors.wind, plant.factors.wind, totalFactor);
    }
    return totalFactor;
}

function calculateYieldWithInfluence(influence, factor, plantYield) {
    switch (influence) {
        case 'low':
            return calculateYieldInfluence(factor.low, plantYield);
        case 'medium':
            return calculateYieldInfluence(factor.medium, plantYield);
        case 'high':
            return calculateYieldInfluence(factor.high, plantYield);
        default:
            console.log('no factors submitted');
            return plantYield;
    }
}

function calculateYieldInfluence(factor, yieldOfPlant) {
    const influence = calculateInfluenceOnYield(factor);
    return yieldOfPlant * influence;
}

function calculateInfluenceOnYield(factor) {
    return (100 + factor) / 100;
}

module.exports = {
    getYieldForPlant,
    
}