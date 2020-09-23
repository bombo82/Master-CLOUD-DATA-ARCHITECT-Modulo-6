require("chai").should()
var LeapYear = require("../index.js")
var expect = require("chai").expect

describe('IsLeapYear function in LeapYear class', function () {
    it('should return true when input is multiple of 4', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(2020).should.to.be.true
    });

    it('should return false when input is not multiple of 4', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(2019).should.to.be.false
    });

    it('should return false when input is multiple of 100 and year is after 1581 e.g. 1900', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(1900).should.to.be.false
    });

    it('should return true when input is multiple of 100 and year is before 1581 e.g. 1400', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(1400).should.to.be.true
    });
    
    it('should return true when input is multiple of 400 and year is after 1581 e.g. 1600', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(1600).should.to.be.true
    });

    it('should return true when input is multiple of 400 and year is before 1581 e.g. 800', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(800).should.to.be.true
    });

    it('should return false when input is a year before 0 e.g. -800', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(-800).should.to.be.false
    });
    
    it('should return false when input is a year before 0 e.g. -8', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(-8).should.to.be.false
    });

    it('should return false when input is a year before 0 e.g. -15', function () {
        let leapYeap = new LeapYear()
        leapYeap.IsLeapYear(-15).should.to.be.false
    });
    
    it('should throw an exception when year is zero (0)', function () {
        let leapYeap = new LeapYear()
        expect(() => leapYeap.IsLeapYear(0)).to.throw("Year zero (0) does not exist!!!");
    });

});