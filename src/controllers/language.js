const languageServices = require("../services/language")
const languageValidator = require("../validators/language")

const add = (async (req, res) => {
    let body;
    try {
        body = languageValidator.addLanguage(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    const { name, code } = body;

    try {
        const language = await languageServices.add(name, code)
        return res.status(201).json({
            status: 201,
            message: "language added successfully",
            data: language,
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
        const [languages, count] = await languageServices.list()
        return res.status(200).json({
            status: 200,
            message: "all languages fetched successfully",
            count: count,
            data: languages,
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
        body = languageValidator.updateLanguage(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }

    try {
        const id = req.params.id
        const language = await languageServices.update(id, body)
        return res.status(200).json({
            status: 200,
            message: "language updated successfully",
            data: language,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const replace = (async (req, res) => {
    let body;
    try {
        body = languageValidator.addLanguage(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }

    try {
        const id = req.params.id
        const language = await languageServices.replace(id, body)
        return res.status(200).json({
            status: 200,
            message: "language updated successfully",
            data: language,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const deleteLanguage = (async (req, res) => {
    try {
        const id = req.params.id
        await languageServices.deleteLanguage(id)
        return res.status(200).json({
            status: 200,
            message: "language delete successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const deleteAllLanguages = (async (req, res) => {
    try {
        await languageServices.deleteAllLanguages()
        return res.status(200).json({
            status: 200,
            message: "All languages deleted successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
module.exports = { add, list, update, replace, deleteLanguage, deleteAllLanguages }