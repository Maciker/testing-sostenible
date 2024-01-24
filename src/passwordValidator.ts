export const passwordValidator = (password: string) => {
    const passwordContainsNumbers = (password:string) => /\d/.test(password)
    const passwordContainsCapitalLetter = (password:string) =>/[A-Z]/.test(password)
    const passwordContainsLowerCaseLetter = (password:string) => /[a-z]/.test(password)
    const passwordContainsUnderscore = (password:string) => /_/.test(password)
    return password.length > 5 
        && passwordContainsNumbers(password) 
        && passwordContainsCapitalLetter(password)
        && passwordContainsLowerCaseLetter(password)
        && passwordContainsUnderscore(password);
}
