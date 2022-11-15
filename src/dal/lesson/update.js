const { pool } = require("../../config/db")
const lessonSerializer = require("./serialize")


const update = (async (id, body) => {
    const query =
        "UPDATE lessons SET name=$1, language=$2, text=$3 WHERE id=$4 RETURNING *;"
    const values = [body.name, body.language, body.text, id];
    try {
        const result = await pool.query(query, values);
        return lessonSerializer.lessonCreateOutput(result);
    } catch (error) {
        throw error
    }
})
module.exports = { update }