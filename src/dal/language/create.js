const { pool } = require("../../config/db")
const languageSerializer = require("./serialize")

const add = (async (name, code) => {
    const query =
        "INSERT INTO languages(name, code)  VALUES($1, $2) RETURNING *;";
    const values = [name, code];
    try {
        const result = await pool.query(query, values);
        return languageSerializer.languageCreateOutput(result);
    } catch (error) {
        throw error
    }
})

module.exports = { add }