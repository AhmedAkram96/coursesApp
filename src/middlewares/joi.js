const { UNAUTHORIZED } = require('http-status');
const { joi } = require("../helper/joi")

module.exports = async (req, res, next) => {
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
        next({
            statusCode: UNAUTHORIZED,
            msg: 'You are not authorized to access this resource',
        });
    }
    next()
};