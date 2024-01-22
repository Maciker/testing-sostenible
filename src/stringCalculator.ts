export const stringCalculator = (value: string) => {
    if (value === null || value === '') {
        return 0
    }
    if (value.length === 1) {
        return Number(value)
    } else {
        const separator = value[0] === '/' ? value[1] : ','
        const listOfChars = value[0] === '/' ? value.slice(3) : value
        const numbers = listOfChars.split((separator)).map(item => Number(item))
        return numbers.filter(number => !isNaN(number)).reduce((result, currentValue)=> result + currentValue)
    }
}