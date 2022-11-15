const { pool } = require("../../config/db")


const deleteLesson = (async (id) => {
    const query =
        "DELETE FROM lessons WHERE id=$1;"
    const values = [id];
    try {
        return pool.query(query, values);
    } catch (error) {
        throw error
    }
})


module.exports = { deleteLesson }