const courseCreateOutput = (async (result) => {
    const course = result.rows[0]
    return course
})
const courseListOutput = (async (result) => {
    const courses = result.rows;
    const count = result.rowCount;
    return [courses, count]
})

module.exports = { courseCreateOutput, courseListOutput }