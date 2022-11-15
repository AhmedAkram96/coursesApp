const { joi } = require("../helper/joi")

const signupInput = ((requestBody) => {
    const schema = joi
        .object({
            first_name: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            last_name: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            username: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            password: joi
                .string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
                .required(),
            confirmPassword: joi
                .string()
                .trim()
                .equal(joi.ref('password'))
                .required(),
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})


const signinInput = ((requestBody) => {
    const schema = joi
        .object({
            username: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            password: joi
                .string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
                .required(),
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})
const updateNameInput = ((requestBody) => {
    const schema = joi
        .object({
            first_name: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            last_name: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})
module.exports = { signupInput, signinInput, updateNameInput }