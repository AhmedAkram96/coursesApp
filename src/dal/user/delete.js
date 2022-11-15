const { pool } = require("../../config/db")

const deleteUser = (async (id) => {
    const query =
        "DELETE FROM users WHERE id=$1;"
    const values = [id];
    try {
        return pool.query(query, values);
    } catch (error) {
        throw error
    }
})

module.exports = { deleteUser }