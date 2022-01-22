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

describe("Matcher tests", () => {
    test("Equality matchers", () => {
        expect(2 * 2).toBe(4);
        expect(4 - 2).not.toBe(1);
    });
    test("Truthy matchers", () => {
        var name = "Bob"
        var nl = null;

        expect(nl).toBeNull();
        expect(name).not.toBeNull();
        
        // name has a valid value
        expect(name).toBeTruthy();

        // failure
        expect(nl).toBeTruthy();

        // pass
        expect(nl).toBeFalsy();
        expect(0).toBeFalsy();
    });
    test("Numeric matchers", () => {
        var num1 = 100;
        var num2 = -20;
        var num3 = 0;

        expect(num1).toBeGreaterThan(10);
        expect(num2).toBeLessThanOrEqual(0);
        expect(num3).toBeGreaterThanOrEqual(0);
    });
    test("String matchers", () => {
        var string1 = "Dan took the deep dive down the rabbit hole"
        expect(string1).toMatch(/dive/);
        expect(string1).not.toMatch(/abc/);
    });
});
