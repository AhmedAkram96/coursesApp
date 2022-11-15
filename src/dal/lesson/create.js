
const { pool } = require("../../config/db")
const lessonSerializer = require("./serialize")

const add = (async (name, language, text) => {
    const query =
        "INSERT INTO lessons(name, language, text)  VALUES($1, $2, $3) RETURNING *;";
    const values = [name, language, text];
    try {
        const result = await pool.query(query, values);
        return lessonSerializer.lessonCreateOutput(result);
    } catch (error) {
        throw error
    }
})

module.exports = { add }