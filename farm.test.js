// For Testing
const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop } = require("./farm");

// Plant
describe("get Yield For Plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });

    test("Calculate total yield with high sun", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costOfCrop: 1,
            revenue: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "high",
        };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });

    test("Calculate total yield with medium sun", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costOfCrop: 1,
            revenue: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "medium",
        };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });

    test("Calculate total yield with low sun", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costOfCrop: 1,
            revenue: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Calculate total yield with low sun and medium wind", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costOfCrop: 1,
            revenue: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -60,
                    medium: 0,
                    high: 60,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "medium"
        };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Calculate total yield with low sun and high wind", () => {
        const corn = {
            name: "corn",
            yield: 30,
            costOfCrop: 1,
            revenue: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -60,
                    medium: 0,
                    high: 60,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
            wind: "high"
        };

        expect(getYieldForPlant(corn, environmentFactors)).toBe(24);
    });
});

// Crops 
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});
// Crops with Factors
describe("get Yield For Crop with environment factor sun", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
        },
      };
    test("Get yield for crop, sun low", () => {
        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input,environmentFactors)).toBe(150);
    });
    test("Get yield for crop, sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(450);
    });
});

// Total Yield
describe("get Total Yield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// Costs
describe("getCostsForCrop", () => {
    test("Calculate cost for ten corn crops", () => {
        const corn = {
            name: "corn",
            cost: 1,
        };
        const input = { 
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
    test("Calculate cost for ten tomato crops", () => {
        const tomato = {
            name: "tomato",
            cost: 2,
        };
        const input = { 
            crop: tomato,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(20);
    });
});

// Revenue
describe("getRevenueForCrop", () => {
    test("Calculate revenue for ten tomato crops", () => {
        const tomato = {
            name: "tomato",
            salePrice: 3,
            yield: 4
        };
        const input = { 
            crop: tomato,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(120);
    });
    test("Calculate revenue for zero tomato crops", () => {
        const tomato = {
            name: "tomato",
            salePrice: 3,
            yield: 4
        };
        const input = { 
            crop: tomato,
            numCrops: 0,
        };
        expect(getRevenueForCrop(input)).toBe(0);
    });
});