const { init } = require("./initializeDB")
const userDAL = require("./user")
const languageDAL = require("./language")
const lessonDAL = require("./lesson")
const courseDAL = require("./course")
const courseLessonDAL = require("./course_lesson")
module.exports = { init, userDAL, languageDAL, lessonDAL, courseDAL, courseLessonDAL }