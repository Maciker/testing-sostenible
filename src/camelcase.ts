export function camelcase(phrase: string) {
    function wordInCamelCase(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const splitPhrase = phrase.split(" ")

    if (splitPhrase.length === 1) {
        return wordInCamelCase(phrase);
    }
    if (splitPhrase.length > 1) {
        const camelCasePhrase = splitPhrase.map( word => wordInCamelCase(word))
        return camelCasePhrase.join((""))
    }
    return ""
}