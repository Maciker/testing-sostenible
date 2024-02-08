export const wordWrap = (words: string, lineLength: number) => {
    if (words.length <= lineLength) {
        return words
    }
    const wrappedText = words.slice(0,lineLength).concat('\n')
    const unwrappedText = words.slice(lineLength);
    return wrappedText.concat(wordWrap(unwrappedText, lineLength));
}
