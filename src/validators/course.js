
const { joi } = require("../helper/joi")

const addCourse = ((requestBody) => {
    const schema = joi
        .object({
            name: joi
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
const updateCourse = ((requestBody) => {
    const schema = joi
        .object({
            name: joi
                .string()
                .trim()
                .lowercase()
                .max(32),
            lessons_list: joi
                .array()
                .items(
                    joi.number()
                ),
            active_lesson: joi
                .number(),
            owner: joi
                .number()
        })
    const { error, value: body } = schema.validate(requestBody);
    if (error) {
        throw error;
    }
    return body
})

module.exports = { addCourse, updateCourse }