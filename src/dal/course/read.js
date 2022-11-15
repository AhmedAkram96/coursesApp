const { pool } = require("../../config/db")
const courseSerializer = require("./serialize")

const getCourseById = (async (id) => {
    const query =
        "SELECT * FROM courses WHERE id=$1;";
    const values = [id];
    try {
        const result = await pool.query(query, values);
        return courseSerializer.courseCreateOutput(result);
    } catch (error) {
        throw error
    }
})
const getCourseWithLesson = (async (lessonId) => {
    const query =
        "SELECT * FROM courses WHERE $1=ANY(lessons_list);";
    const values = [lessonId];
    try {
        const result = await pool.query(query, values);
        return courseSerializer.courseListOutput(result);
    } catch (error) {
        throw error
    }
})

const list = (async () => {
    const query =
        "SELECT c.name as course_name, u.username as owner_name, l.name as active_lesson_name FROM courses c, users u, lessons l WHERE u.id=c.owner AND l.id=c.active_lesson;";
    try {
        const result = await pool.query(query);
        return courseSerializer.courseListOutput(result);
    } catch (error) {
        throw error
    }
})

const listById = (async (userId) => {
    const query =
        "SELECT c.name as course_name, u.username as owner_name, l.name as active_lesson_name FROM courses c, users u, lessons l WHERE c.owner=$1 AND u.id=c.owner AND l.id=c.active_lesson;";

    const values = [userId];
    try {
        const result = await pool.query(query, values);
        return courseSerializer.courseListOutput(result);
    } catch (error) {
        throw error
    }
})
module.exports = { getCourseById, getCourseWithLesson, list, listById }