const { pool } = require("../../config/db")
const courseLessonSerializer = require("./serialize")

const add = (async (lesson, course) => {
    const query =
        "INSERT INTO course_lesson(lessonId, courseId)  VALUES($1, $2) RETURNING *;";
    const values = [lesson, course];
    try {
        const result = await pool.query(query, values);
        return courseLessonSerializer.courseLessonCreateOutput(result);
    } catch (error) {
        throw error
    }
})

module.exports = { add }