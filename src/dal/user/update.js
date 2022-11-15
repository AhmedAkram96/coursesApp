const { pool } = require("../../config/db")
const userSerializer = require("./serialize")


const updateProfilePicture = (async (path, id) => {
    const query =
        "UPDATE users SET profilePicture=$1 WHERE id=$2 RETURNING *;"
    const values = [path, id];
    try {
        const result = await pool.query(query, values);
        return userSerializer.userViewOutput(result);
    } catch (error) {
        throw error
    }
})
const updateName = (async (first_name, last_name, id) => {
    const query =
        "UPDATE users SET first_name=$1, last_name=$2 WHERE id=$3 RETURNING *;"
    const values = [first_name, last_name, id];
    try {
        const result = await pool.query(query, values);
        return userSerializer.userViewOutput(result);
    } catch (error) {
        throw error
    }
})


module.exports = { updateProfilePicture, updateName }