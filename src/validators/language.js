
const { joi } = require("../helper/joi")

const addLanguage = ((requestBody) => {
    const schema = joi
        .object({
            name: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            code: joi
                .string()
                .trim()
                .lowercase()
                .max(2)
                .required(),
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})
const updateLanguage = ((requestBody) => {
    const schema = joi
        .object({
            name: joi
                .string()
                .trim()
                .lowercase()
                .max(32),
            code: joi
                .string()
                .trim()
                .lowercase()
                .max(2)
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})

module.exports = { addLanguage, updateLanguage }