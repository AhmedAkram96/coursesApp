const { pool } = require("../../config/db")
const lessonSerializer = require("./serialize")

const list = (async () => {
    const query =
        "SELECT * FROM lessons;";
    try {
        const result = await pool.query(query);
        return lessonSerializer.lessonListOutput(result);
    } catch (error) {
        throw error
    }
})
const getLessonById = (async (id) => {
    const query =
        "SELECT * FROM lessons WHERE id=$1;";
    const values = [id];
    try {
        const result = await pool.query(query, values);
        return lessonSerializer.lessonCreateOutput(result);
    } catch (error) {
        throw error
    }
})
module.exports = { list, getLessonById }