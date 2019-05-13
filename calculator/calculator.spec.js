const calculator = require('./calculator.js');


describe('calculator.js', () => {
    describe('add() method', () => {

        it('should return the sume of two numbers', () => {
            expect(calculator.add(2,2)).toBe(4)
            expect(calculator.add(2,1)).toBe(3)
            expect(calculator.add(2,3)).toBe(5)
        })

        it('should return 0 when called without values', () => {
            expect(calculator.add()).toBe(0)
        })

        it('should return the number when only one is given', () => {
            expect(calculator.add(2)).toBe(2)
        })

        it('should add any number of arguments', () => {
            expect(calculator.add(4, 9, 3, 1)).toBe(17)
        })

        it('should be able to handle an array', () => {
            expect(calculator.add([1,4,6])).toBe(11)
        })

        it('toBe or not.toBe', () => {
            expect(true).not.toBe(false)
            expect({ name: 'John' }).toEqual({ name : 'John' })
        })
    })
})