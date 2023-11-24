export const checkValidData=(name,email,password)=>{
    const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
    if(!isNameValid) return "Invalid Name";
    if(!isEmailValid) return "Invalid Email ID";
    if(!isPasswordValid) return "Invalid Password";
    return null;
}