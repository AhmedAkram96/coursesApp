
const { joi } = require("../helper/joi")

const addLesson = ((requestBody) => {
    const schema = joi
        .object({
            name: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            language: joi
                .string()
                .trim()
                .lowercase()
                .max(32)
                .required(),
            text: joi
                .string()
                .required(),
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})
const updateLesson = ((requestBody) => {
    const schema = joi
        .object({
            name: joi
                .string()
                .trim()
                .lowercase()
                .max(32),
            language: joi
                .string()
                .trim()
                .lowercase()
                .max(32),
            text: joi
                .string()
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})

module.exports = { addLesson, updateLesson }