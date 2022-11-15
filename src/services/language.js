const { languageDAL } = require("../dal")


const add = (async (name, code) => {
    try {
        const language = await languageDAL.add(name, code)
        return language
    } catch (error) {
        throw error
    }
})

const list = (async () => {
    try {
        return languageDAL.list()
    } catch (error) {
        throw error
    }
})

const update = (async (id, body) => {
    try {
        var language = await languageDAL.getLanguageById(id)
        if (!language) {
            throw "no language exists with that id"
        }
        language = { ...language, ...body }
        return languageDAL.update(id, language)
    } catch (error) {
        throw { detail: error }
    }
})
const replace = (async (id, body) => {
    try {
        var language = await languageDAL.getLanguageById(id)
        if (!language) {
            throw "no language exists with that id"
        }
        return languageDAL.replace(id, body)
    } catch (error) {
        throw { detail: error }
    }
})
const deleteLanguage = (async (id) => {
    try {
        var language = await languageDAL.getLanguageById(id)
        if (!language) {
            throw "no language exists with that id"
        }
        return languageDAL.deleteLanguage(id)
    } catch (error) {
        throw { detail: error }
    }
})
const deleteAllLanguages = (async () => {
    try {
        return languageDAL.deleteAllLanguages()
    } catch (error) {
        throw error
    }
})
module.exports = { add, list, update, replace, deleteLanguage, deleteAllLanguages }