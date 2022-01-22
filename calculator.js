const mathOperations = {
    sum: function(a, b) {
        return a + b;
    },
    diff: function(a, b) {
        return a - b;
    },
    product: function(a, b) {
        return a * b;
    }
};

function throwException() {
    throw new Error("Some error message");
}

module.exports = { mathOperations, throwException };
