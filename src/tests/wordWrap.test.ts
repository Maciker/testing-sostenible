import {wordWrap} from "../wordWrap";

describe('WordWrap Tests', () => {
    it('Given a empty string should return an empty string', () => {
        expect(wordWrap('', 5)).toEqual('')
    })
})
