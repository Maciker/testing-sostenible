export function camelcase(phrase: string) {
    function wordInCamelCase(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const splitPhrase = phrase.split(/[ _-]/)

    return splitPhrase.map( word => wordInCamelCase(word)).join((''))
}
