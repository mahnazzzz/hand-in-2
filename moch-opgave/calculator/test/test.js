var expect = require("chai").expect;
var calc = require('../lib/calculator');

describe('Calculator', function () {
    describe('Add', function () {
        it('Add two numbers', function () {
            let sum = calc.add(1, 1);
            expect(sum).to.equal(2);
        });
    });
    describe('Divide', function () {
        it('Throw error when dividing by 0', function () {
            expect(() => calc.divide(5, 0)).to.throw('Attempt to divide by zero')
        });
    });
});