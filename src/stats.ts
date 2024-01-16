export function sum(numbers:number[]) {
    return numbers.reduce( (previous, current: number) => previous + current);
}

export function average(numbers: number[]) {
    return sum(numbers) / numbers.length
}