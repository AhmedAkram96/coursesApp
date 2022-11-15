const courseLessonCreateOutput = (async (result) => {
    const lesson_course = result.rows[0]
    return lesson_course
})

module.exports = { courseLessonCreateOutput }