export const validationEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}