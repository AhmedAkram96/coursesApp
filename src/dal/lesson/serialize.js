const lessonCreateOutput = (async (result) => {
    const lesson = result.rows[0]
    return lesson
})
const lessonListOutput = (async (result) => {
    const lessons = result.rows;
    const count = result.rowCount;
    return [lessons, count]
})

module.exports = { lessonCreateOutput, lessonListOutput }