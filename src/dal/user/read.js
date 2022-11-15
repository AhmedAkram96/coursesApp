const { pool } = require("../../config/db")
const userSerializer = require("./serialize")


const viewUserDetails = (async (id) => {
    const query =
        "SELECT * FROM users WHERE id=$1;"
    const values = [id];
    try {
        const result = await pool.query(query, values);
        if (result.rowCount === 0) {
            return undefined
        }
        return userSerializer.userViewOutput(result);
    } catch (error) {
        throw error
    }
})
const getUserByName = (async (username) => {
    const query =
        "SELECT * FROM users WHERE username=$1;"
    const values = [username];
    try {
        const result = await pool.query(query, values);
        return userSerializer.userSigninOutput(result);
    } catch (error) {
        throw error
    }
})

module.exports = { viewUserDetails, getUserByName }