import * as statsAsync from "../statsAsync";

describe('Stats Async should', ()=> {
    it("async-calculates the sum of all elements of the array", async () => {
        const result = await statsAsync.sum([1, 2, 3])
        const expected = 6;
        expect(expected).toBe(result)
    })

    it("async-calculates the average of all elements of the array", async () => {
        const result = await statsAsync.average([1, 2, 3])
        const expected = 2;
        expect(expected).toBe(result)
    })
})