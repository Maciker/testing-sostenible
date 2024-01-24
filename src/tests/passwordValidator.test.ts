import {passwordValidator} from "../passwordValidator";

describe('Paswword Validator Tests', ()=>{
    it('Return false if the password it is empty', ()=>{
        expect(passwordValidator('')).toBe(false)
    })
    it('Return false if the password legth it is 5 or less', ()=>{
        expect(passwordValidator('abc')).toBe(false)
    })
    it('Return true if the password legth it is greater than 5', ()=>{
        expect(passwordValidator('abc1A_')).toBe(true)
    })
    it('Return false if the password have no numbers', ()=>{
        expect(passwordValidator('abcAA_')).toBe(false)
    })
    it('Return false if the password have no capital letters', ()=>{
        expect(passwordValidator('abc1111_')).toBe(false)
    })
    it('Return false if the password have no lower case letters', ()=>{
        expect(passwordValidator('ABC1111_')).toBe(false)
    })
    it('Return false if the password have no underscore', ()=>{
        expect(passwordValidator('ABC1111222')).toBe(false)
    })
    it('Return true if the password matches all the requirements', ()=>{
        expect(passwordValidator('_Ab1234545')).toBe(true)
    })
})