const { pool } = require("../../config/db")
const courseSerializer = require("./serialize")

const add = (async (name, owner) => {
    const query =
        "INSERT INTO courses(name, owner)  VALUES($1, $2) RETURNING *;";
    const values = [name, owner];
    try {
        const result = await pool.query(query, values);
        return courseSerializer.courseCreateOutput(result);
    } catch (error) {
        throw error
    }
})
module.exports = { add }