require("chai").should()
var Parity = require("../index.js")

var assert = require('assert');
describe('Odd function in Parity class', function () {
    it('should return true when input is 1', function () {
        let parity = new Parity()
        parity.odd(1).should.to.be.true
    });
    
    it('should return false when input is 2', function () {
        let parity = new Parity()
        parity.odd(2).should.to.be.false
    });

    it('should return true when input is 3', function () {
        let parity = new Parity()
        parity.odd(3).should.to.be.true
    });

    it('should return false when input is 4', function () {
        let parity = new Parity()
        parity.odd(4).should.to.be.false
    });

    it('should return true when input is -1', function () {
        let parity = new Parity()
        parity.odd(-1).should.to.be.true
    });

    it('should return false when input is -6', function () {
        let parity = new Parity()
        parity.odd(-6).should.to.be.false
    });

    it('should return false when input is 0', function () {
        let parity = new Parity()
        parity.odd(0).should.to.be.false
    });

});