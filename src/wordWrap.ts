export const wordWrap = (words: string, lineLength: number) => {
    if (words.length <= lineLength) {
        return words
    }
    return words.slice(0,4).concat('\n').concat(words.slice(4))
}
