const mathOperations = require("./calculator");

describe("Calculator tests", () => {
    test("Adding 1 + 2 should return 3", () => {
        // arrange and act
        var result = mathOperations.sum(1, 2);

        // assert
        expect(result).toBe(3);
    });
    test("Subtracting 2 from 10 should return 8", () => {
        // arrange and act
        var result = mathOperations.diff(10, 2);

        // assert
        expect(result).toBe(8);
    });
    test("Multiplying 2 and 8 should return 16", () => {
        // arrange and act
        var result = mathOperations.product(2, 8);

        // assert
        expect(result).toBe(16);
    });
});
