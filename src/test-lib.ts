export function expect<T>(expected: T) {
    return {
         toBe(result: T) {
            if (result !== expected) {
                throw new Error(`ERROR! ${result} is not equal to ${expected}`)
            }
        }
    }
}

export async function test(description:string, callback:()=>void){
    try {
        await callback();
        console.log(`Test OK ${description}`)
    }
    catch (error) {
        console.log(`Test FAIL ${description}`)
        console.log(error)
    }
}

export const it = test;

export function describe(description: string, callback: ()=>void){
    console.log(description);
    callback();
}