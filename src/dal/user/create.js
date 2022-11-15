const res = require("express/lib/response");
const { pool } = require("../../config/db")
const userSerializer = require("./serialize")

const signup = (async (first_name, last_name, username, password) => {
    const query =
        "INSERT INTO users(first_name, last_name, username, password)  VALUES($1, $2, $3, $4) RETURNING *;";
    const values = [first_name, last_name, username, password];
    try {
        const result = await pool.query(query, values);
        return userSerializer.userCreateOutput(result);
    } catch (error) {
        throw error
    }
})


module.exports = { signup }