const courseServices = require("../services/course")
const courseValidator = require("../validators/course")

const add = (async (req, res) => {
    let body;
    try {
        body = courseValidator.addCourse(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    const { name } = body;
    try {
        const id = req.decodedToken.id
        const course = await courseServices.add(name, id)
        return res.status(201).json({
            status: 201,
            message: "course added successfully",
            data: course,
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
        body = courseValidator.updateCourse(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    try {
        const id = req.params.id
        const course = await courseServices.update(id, body)
        return res.status(200).json({
            status: 200,
            message: "course updated successfully",
            data: course,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }

})

const deleteCourse = (async (req, res) => {
    try {
        const id = req.params.id
        await courseServices.deleteCourse(id)
        return res.status(200).json({
            status: 200,
            message: "course deleted successfully",
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
        const [courses, count] = await courseServices.list()
        return res.status(200).json({
            status: 200,
            message: "all courses fetched successfully",
            count: count,
            data: courses,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const listById = (async (req, res) => {
    try {
        const id = req.decodedToken.id
        const [courses, count] = await courseServices.listById(id)
        return res.status(200).json({
            status: 200,
            message: "all courses fetched successfully",
            count: count,
            data: courses,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})

module.exports = { add, update, deleteCourse, list, listById }