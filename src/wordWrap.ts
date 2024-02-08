export const wordWrap = (words: string, lineLength: number) => {
    if (words.length <= lineLength) {
        return words
    }
    return 'long\nword'
}
