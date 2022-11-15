const { courseDAL, lessonDAL, courseLessonDAL } = require("../dal");
const _ = require("lodash")

//checks if requested lesson to be added exists in Lessons table or not
const checkLessonsValidity = (async (lessons_list) => {
    try {
        for (var i = 0; i < lessons_list.length; i++) {
            var lesson = lessons_list[i]
            const tempLesson = await lessonDAL.getLessonById(lesson)
            if (!tempLesson) {
                throw { detail: "no lessons found with id " + lesson }
            }
        }
    } catch (error) {
        throw error
    }

})
const checkActiveLesson = (async (active_lesson, lessons_list) => {
    try {
        const tempLesson = await lessonDAL.getLessonById(active_lesson)
        if (!tempLesson) {
            throw { detail: "no lessons found with id " + active_lesson }
        }
        if (!_.includes(lessons_list, active_lesson)) {
            throw "active lesson doesnot exist in the lesson list"
        }
    } catch (error) {
        throw error
    }

})
//on deleting a lesson form db, this lesson will be deleted as well from all
//courses with that lesson inside their lessons_list
const updateCourseLesson = (async (lessonId) => {
    try {
        const [courses, count] = await courseDAL.getCourseWithLesson(lessonId)
        for (var i = 0; i < count; i++) {
            courses[i].lessons_list = _.remove(courses[i].lessons_list, (lesson) => lesson != lessonId);
            await courseDAL.update(courses[i].id, courses[i])
        }
    } catch (error) {
        throw error
    }

})

const add = (async (name, owner) => {
    try {
        const course = await courseDAL.add(name, owner)
        return course
    } catch (error) {
        throw error
    }
})
const update = (async (id, body) => {
    try {
        var course = await courseDAL.getCourseById(id)
        if (!course) {
            throw "no course exists with that id"
        }
        if (body.lessons_list) {
            await checkLessonsValidity(body.lessons_list);
            if (body.active_lesson) {
                await checkActiveLesson(body.active_lesson, body.lessons_list)
            }
        }
        course = { ...course, ...body }
        return courseDAL.update(id, course)
    } catch (error) {
        throw { detail: error }
    }
})

const deleteCourse = (async (id) => {
    try {
        var course = await courseDAL.getCourseById(id)
        if (!course) {
            throw "no course exists with that id"
        }
        return courseDAL.deleteCourse(id)
    } catch (error) {
        throw { detail: error }
    }
})

const list = (async () => {
    try {
        return courseDAL.list()
    } catch (error) {
        throw error
    }
})
const listById = (async (userId) => {
    try {
        return courseDAL.listById(userId)
    } catch (error) {
        throw error
    }
})

module.exports = { add, update, updateCourseLesson, deleteCourse, list, listById }