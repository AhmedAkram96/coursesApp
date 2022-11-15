const lessonServices = require("../services/lesson")
const lessonValidator = require("../validators/lesson")

const add = (async (req, res) => {
    let body;
    try {
        body = lessonValidator.addLesson(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    const { name, language, text } = body;

    try {
        const lesson = await lessonServices.add(name, language, text)
        return res.status(201).json({
            status: 201,
            message: "lesson added successfully",
            data: lesson,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const list = (async (req, res) => {
    try {
        const [lessons, count] = await lessonServices.list()
        return res.status(200).json({
            status: 200,
            message: "all lessons fetched successfully",
            count: count,
            data: lessons,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const update = (async (req, res) => {
    let body;
    try {
        body = lessonValidator.updateLesson(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }

    try {
        const id = req.params.id
        const lesson = await lessonServices.update(id, body)
        return res.status(200).json({
            status: 200,
            message: "lesson updated successfully",
            data: lesson,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})

const deleteLesson = (async (req, res) => {
    try {
        const id = req.params.id
        await lessonServices.deleteLesson(id)
        return res.status(200).json({
            status: 200,
            message: "lesson delete successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})

module.exports = { add, list, update, deleteLesson }