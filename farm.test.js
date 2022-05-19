// For Testing
const { getYieldForPlant } = require("./farm");

// Plant
describe("get Yield For Plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
})