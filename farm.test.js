// For Testing
const { getYieldForPlant, getYieldForCrop } = require("./farm");

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
})