const { pool } = require("../../config/db")


const deleteCourse = (async (id) => {
    const query =
        "DELETE FROM courses WHERE id=$1;"
    const values = [id];
    try {
        return pool.query(query, values);
    } catch (error) {
        throw error
    }
})

module.exports = { deleteCourse }