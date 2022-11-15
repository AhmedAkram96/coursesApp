const { lessonDAL } = require("../dal")
const courseServices = require("./course")

const add = (async (name, language, text) => {
    try {
        const lesson = await lessonDAL.add(name, language, text)
        return lesson
    } catch (error) {
        throw error
    }
})

const list = (async () => {
    try {
        return lessonDAL.list()
    } catch (error) {
        throw error
    }
})

const update = (async (id, body) => {
    try {
        var lesson = await lessonDAL.getLessonById(id)
        if (!lesson) {
            throw "no lesson exists with that id"
        }
        lesson = { ...lesson, ...body }
        return lessonDAL.update(id, lesson)
    } catch (error) {
        throw { detail: error }
    }
})
const deleteLesson = (async (id) => {
    try {
        var lesson = await lessonDAL.getLessonById(id)
        if (!lesson) {
            throw "no lesson exists with that id"
        }
        await lessonDAL.deleteLesson(id)
        await courseServices.updateCourseLesson(id)
        return true
    } catch (error) {
        throw { detail: error }
    }
})

module.exports = { add, list, update, deleteLesson }