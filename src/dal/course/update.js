const { pool } = require("../../config/db")
const courseSerializer = require("./serialize")


const update = (async (id, body) => {
    const query =
        "UPDATE courses SET name=$1, lessons_list=$2, active_lesson=$3, owner=$4 WHERE id=$5 RETURNING *;"
    const values = [body.name, body.lessons_list, body.active_lesson, body.owner, id];
    try {
        const result = await pool.query(query, values);
        return courseSerializer.courseCreateOutput(result);
    } catch (error) {
        throw error
    }
})


module.exports = { update }