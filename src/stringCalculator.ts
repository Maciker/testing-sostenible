export const stringCalculator = (expression: string) => {
    if (expression === null || expression === '') {
        return 0
    }
    if (expression.length === 1) {
        return Number(expression)
    } else {
        const separator = expression[0] === '/' ? expression[1] : ','
        const listOfChars = expression[0] === '/' ? expression.slice(3) : expression
        const numbers = listOfChars.split((separator)).map(item => Number(item))
        return numbers.filter(number => !isNaN(number)).reduce((result, currentValue)=> result + currentValue)
    }
}
